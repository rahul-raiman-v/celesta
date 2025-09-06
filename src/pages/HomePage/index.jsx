import React from "react";
import { useNavigate } from "react-router";

// This component encapsulates the entire hero section, including the countdown logic.
const HeroSection = () => {
  // State to hold the calculated time left until the event.
  const [timeLeft, setTimeLeft] = React.useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    isLive: false,
  });

  // useEffect hook to set up and run the countdown timer.
  // This runs only once when the component mounts, thanks to the empty dependency array [].
  React.useEffect(() => {
    // Set the date we're counting down to.
    const countDownDate = new Date("Sep 26, 2025 09:00:00").getTime();

    // Set an interval to update the countdown every second.
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      // If the countdown is over, clear the interval and update the state.
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft((prev) => ({ ...prev, isLive: true }));
        return;
      }

      // Calculate days, hours, minutes, and seconds.
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the state with the new time, formatting with padStart.
      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
        isLive: false,
      });
    }, 1000);

    // Cleanup function: This will be called when the component unmounts.
    // It's crucial for preventing memory leaks.
    return () => clearInterval(interval);
  }, []);

  // Inline style object for the background image to mimic the original CSS.
  const heroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    backgroundSize: "cover",
  };

  const router = useNavigate();

  return (
    <section style={heroStyle} className="text-white bg-black">
      <div className="container mx-auto px-6 py-24 flex flex-col items-center text-center">
        {/* Event Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Celesta 2025
          </span>
          <span className="block text-white">A Mega Techno Fest</span>
        </h1>

        {/* Event Subtitle/Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-gray-300">
          Join us for a days of immersive coding workshops, and a 6-hour
          hackathon.
        </p>

        {/* Countdown Timer: Conditionally renders the timer or a "Live" message */}
        <div
          id="countdown"
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-center"
        >
          {timeLeft.isLive ? (
            <div className="text-4xl md:text-5xl font-bold text-green-400">
              The Event is LIVE!
            </div>
          ) : (
            <>
              <div>
                <div className="text-4xl md:text-6xl font-bold bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  {timeLeft.days}
                </div>
                <div className="text-sm md:text-base font-medium mt-2 uppercase tracking-wider">
                  Days
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-bold bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  {timeLeft.hours}
                </div>
                <div className="text-sm md:text-base font-medium mt-2 uppercase tracking-wider">
                  Hours
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-bold bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm md:text-base font-medium mt-2 uppercase tracking-wider">
                  Minutes
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-bold bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm md:text-base font-medium mt-2 uppercase tracking-wider">
                  Seconds
                </div>
              </div>
            </>
          )}
        </div>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-10 text-lg">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>September 26, 2025</span>
          </div>
          <div className="hidden sm:block text-gray-500">|</div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Bannari Amman Institute of Technology, Sathyamangalam</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => router("/combo")}
            className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Register Now
          </button>
          <button
            onClick={() => router("/schedule")}
            className="cursor-pointer bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm"
          >
            View Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}
