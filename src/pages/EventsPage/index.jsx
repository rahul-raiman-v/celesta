"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import { EventsStore } from "../../store";
import { EventCard } from "../../components/cards";
import { Search } from "lucide-react";

// Custom hook for search functionality
const useEventSearch = (allEvents) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchTimeoutRef = useRef(null);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Debounce search
    searchTimeoutRef.current = setTimeout(() => {
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }

    // Normalizes a field into a string
    const normalizeField = (field) => {
      if (typeof field === "string") return field;
      if (typeof field === "object" && field !== null) {
        return Object.values(field).join(" ");
      }
      return "";
    };

    // Extracts fields from a single tab
    const getTabFields = (tab) => {
    if (!tab?.content) return [];
    if (Array.isArray(tab.content)) {
      return tab.content.map(normalizeField);
    }
    return [normalizeField(tab.content)];
    };

    // Extracts all searchable fields from an event
    const getSearchFields = (event) => {
      const baseFields = [event.eventTitle, event.eventType, event.venue];
      const tabFields = event.tabs ? event.tabs.flatMap(getTabFields) : [];
      return [...baseFields, ...tabFields].filter(Boolean);
    };

    // Checks if an event matches the search query
    const matchesQuery = (event, query) => {
      return getSearchFields(event).some((field) =>
        field.toLowerCase().includes(query.toLowerCase())
      );
    };

      // Main filter logic
      const results = allEvents.filter((event) => matchesQuery(event, query));

      setSearchResults(results);
    }, 300); // 300ms debounce
  }, [allEvents]);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setSearchResults([]);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return { searchQuery, searchResults, handleSearch, clearSearch };
};

// Custom hook for outside click detection
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
};

export default function EventsPage() {
  const stats = EventsStore(useShallow((s) => s.events));
  const [selectedCategory, setSelectedCategory] = useState(null);
  const searchRef = useRef(null);

  // Memoize flattened events to prevent unnecessary recalculations
  const allEventsAugmented = useMemo(() => 
    stats.flatMap((category) =>
      category.events.map((event) => ({
        ...event,
        categoryId: category.id,
        categoryTitle: category.title,
        // Map the data structure to match EventCard props
        eventTabs: event.tabs,
        eventDate: event.date,
        eventVenue: event.venue,
        eventImage: event.img,
      }))
    ), [stats]
  );

  // Search functionality
  const { searchQuery, searchResults, handleSearch, clearSearch } = useEventSearch(allEventsAugmented);

  // Close search results when clicking outside
  useOutsideClick(searchRef, clearSearch);

  // Categories with "All" option
  const statsWithAll = useMemo(() => [
    {
      id: "all",
      title: "All",
      icon: (props) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      ),
      events: allEventsAugmented,
    },
    ...stats,
  ], [stats, allEventsAugmented]);

  // Set default category to "All"
  useEffect(() => {
    if (statsWithAll.length > 0 && !selectedCategory) {
      setSelectedCategory(statsWithAll[0]);
    }
  }, [statsWithAll, selectedCategory]);

  const goToEvent = useCallback((eventId) => {
    const el = document.getElementById(`event-${eventId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    clearSearch();
  }, [clearSearch]);

  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
    clearSearch(); // Clear search when switching categories
  }, [clearSearch]);

  // Handle keyboard navigation for search results
  const handleSearchKeyDown = (e) => {
    if (e.key === "Escape") {
      clearSearch();
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-600">
      {/* Category Cards */}
      <div className="w-full max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8 pt-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Events & Workshops
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {statsWithAll.map((stat) => (
            <button
              key={stat.id}
              onClick={() => handleCategorySelect(stat)}
              className={`
                cursor-pointer rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200 
                hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500
                ${selectedCategory?.id === stat.id ? "ring-2 ring-blue-500 bg-blue-50" : ""}
              `}
              aria-pressed={selectedCategory?.id === stat.id}
              aria-label={`Filter by ${stat.title} category, ${stat.events.length} events`}
            >
              <div className="flex items-center space-x-3">
                {stat.icon ? (
                  <stat.icon className="h-8 w-8 text-gray-500" />
                ) : (
                  <img src={stat.img} alt={stat.title} className="h-8 w-8 object-cover rounded" />
                )}
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </div>
                  <div className="text-xl font-semibold text-gray-900">
                    {stat.events.length}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Search Section */}
      <div className="w-full max-w-3xl mx-auto mb-6 px-4 sm:px-6 lg:px-8">
        <div className="relative" ref={searchRef}>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search events, workshops, hackathons..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none pl-10"
              aria-label="Search events"
            />
            {/* Search Icon */}
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          
          {/* Search Results Dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg z-10 max-h-60 overflow-y-auto border border-gray-200">
              <div className="p-2 text-xs text-gray-500 border-b">
                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
              </div>
              {searchResults.map((event) => (
                <button
                  key={event.id}
                  onClick={() => goToEvent(event.id)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none border-b border-gray-100 last:border-b-0"
                >
                  <div className="font-medium text-gray-900">{event.eventTitle}</div>
                  <div className="text-sm text-gray-500">
                    {event.categoryTitle}
                    {event.eventType && ` • ${event.eventType}`}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* No Results Message */}
          {searchQuery && searchResults.length === 0 && (
            <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg z-10 border border-gray-200 p-4 text-center text-gray-500">
              No events found for "{searchQuery}"
            </div>
          )}
        </div>
      </div>

        {/* Events List */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 ">
        {selectedCategory ? (
            <>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                {selectedCategory.title} Events
                </h2>
                <p className="text-gray-600 mt-1">
                {selectedCategory.events.length} event{selectedCategory.events.length !== 1 ? 's' : ''} available
                </p>
            </div>
            
            {selectedCategory.events.length > 0 ? (
                <div className="space-y-6">
                {selectedCategory.id === "all"
                    ? allEventsAugmented.map((event) => (
                        <div key={event.id} id={`event-${event.id}`} className="w-full">
                        <EventCard
                            eventTabs={event.eventTabs}
                            eventType={event.eventType}
                            eventTitle={event.eventTitle}
                            eventDate={event.eventDate}
                            eventVenue={event.eventVenue}
                            eventImage={event.eventImage}
                            brochureLink={event.brochureLink}
                            problemLink={event.problemLink}
                        />
                        </div>
                    ))
                    : selectedCategory.events.map((event) => (
                        <div key={event.id} id={`event-${event.id}`} className="w-full">
                        <EventCard
                            eventTabs={event.tabs}
                            eventType={event.eventType}
                            eventTitle={event.eventTitle}
                            eventDate={event.date}
                            eventVenue={event.venue}
                            eventImage={event.img}
                            brochureLink={event.brochureLink}
                            problemLink={event.problemLink}
                        />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                <svg
                    className="mx-auto h-12 w-12 text-gray-400 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3a4 4 0 118 0v4m-4 0h4m-4 0a4 4 0 118 0m-4 0h4"
                    />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No events in this category
                </h3>
                <p className="text-gray-500">
                    Check back later for new events or try a different category.
                </p>
                </div>
            )}
            </>
        ) : (
            <div className="text-center py-12">
            <div className="text-gray-500">
                Select a category to view events
            </div>
            </div>
        )}
        </div>
    </div>
  );
}