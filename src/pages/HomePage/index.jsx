import { Instagram, Linkedin } from "lucide-react";
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
            <span>September 29, 2025</span>
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

const AboutSection = () => {
  return (
    <div className="mx-auto pt-20 pb-6 px-6 text-center w-full">
      <p className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        About <span className="gradient-text">Celesta'25</span>
      </p>
      <p className="max-w-3xl mx-auto text-gray-700 text-lg">
        Celesta is the annual techno-management festival of Bannari Amman
        Institute of Technology. It's a platform for students to showcase their
        technical prowess, compete with the best, and learn from industry
        experts. This year, we're bringing a bigger and better lineup of events,
        workshops, and guest lectures to ignite your passion for technology and
        innovation.
      </p>
    </div>
  );
};

const EventHighlights = () => {
  return (
    <section id="events" className="py-20 md:py-32 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Event Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 transform hover:-translate-y-2 transition duration-300 border border-gray-400">
            <div className="w-16 h-16 bg-indigo-500/20 text-indigo-400 rounded-lg flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m14 9-5 5" />
                <path d="m9 9 5 5" />
                <path d="M2 12h2.5" />
                <path d="M19.5 12H22" />
                <path d="M12 2v2.5" />
                <path d="M12 19.5V22" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">VISIONHACK</h3>
            <p className="text-gray-400">
              An intense 6-hour coding marathon where teams brainstorm, design,
              and develop innovative solutions to real-world problems.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 transform hover:-translate-y-2 transition duration-300 border border-gray-400">
            <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Paper League</h3>
            <p className="text-gray-400">
              Showcase your innovative ideas and research. Present technical
              papers on trending topics to a panel of experts and peers.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 transform hover:-translate-y-2 transition duration-300 border border-gray-400">
            <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 15v5M10 22h4" />
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Pixel Craft</h3>
            <p className="text-gray-400">
              A creative UI/UX challenge to design intuitive and visually
              appealing user interfaces. Emphasizes creativity and user-centered
              thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="relative pb-20  overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions? We’re here to make your{" "}
            <span className="font-semibold text-indigo-600">Celesta'25</span>{" "}
            experience unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-col-1 gap-10">
          <div className="glass-morphism bg-white rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-md border border-white/20 flex flex-col justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.7629352440936!2d77.27452747513593!3d11.497017845488983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9215d6d1b28f9%3A0xf48946a7dfcfeb1a!2sBannari%20Amman%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1755107737262!5m2!1sen!2sin"
              width=""
              height=""
              style={{ border: 0, height: "100%", width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bannari Amman Institute of Technology Map"
            />
          </div>
          {/* Social Links Card */}
          <div className="glass-morphism bg-white rounded-2xl p-8 shadow-xl  hover:scale-105 transition-transform duration-300 backdrop-blur-md border border-white/20 flex flex-col justify-center items-center">
            <h4 className="text-xl font-semibold text-slate-800 mb-4">
              Follow Us
            </h4>
            <p className="text-slate-600 mb-6 text-center">
              Stay updated with event announcements, schedules, and more.
            </p>
            <div className="flex gap-5 flex-wrap">
              <a
                href="https://www.instagram.com/lifeatbit?igsh=MW8wdjV1ZGloejV1MQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-pink-500 to-red-500 text-white p-4 rounded-full shadow-lg hover:shadow-pink-300 transition-all duration-300"
              >
                <Instagram size={24} />
              </a>
              {/* <a
                href="#"
                className="bg-gradient-to-tr from-blue-400 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-blue-300 transition-all duration-300"
              >
                <Twitter size={24} />
              </a> */}
              <a
                href="https://www.linkedin.com/school/bitsathyindia/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-blue-700 to-indigo-900 text-white p-4 rounded-full shadow-lg hover:shadow-indigo-300 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <button
                onClick={() => {
                  window.open(
                    "https://codecirclebitsathy.netlify.app/",
                    "_blank",
                  );
                }}
                className="cursor-pointer"
              >
                <img
                  src="https://codecirclebitsathy.netlify.app/images/codecirclelogo.png"
                  alt=""
                  className="size-14 rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="bg-gradient-blue">
      <HeroSection />
      <AboutSection />
      <EventHighlights />
      <ContactSection />
    </div>
  );
}
