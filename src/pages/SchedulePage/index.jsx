import { PaperPresentationImg } from "../../assets";
import { ScheduleCard } from "../../components";

export default function SchedulePage() {
  const scheduledEvents = [
    {
      id: 1,
      time: "08:00 AM",
      title: "Registration",
      venue: ["Parking Lot"],
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1757154054/pexels-rdne-7648057_yda0cp.jpg",
      description:
        "Your day of innovation begins here! Head to the registration desk to check in, collect your ID badge, and grab your symposium welcome kit. Join us for morning refreshments, connect with fellow participants and speakers, and get energized for the exciting day ahead.",
    },
    {
      id: 2,
      time: "09:00 AM",
      title: "Inaugration Session",
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1757154054/pexels-rdne-7648057_yda0cp.jpg",
      venue: ["SF SH1"],
      description:
        "We officially commence Celesta'25! Join us for the formal opening ceremony featuring a welcome address from our college leadership and an inspiring keynote speech by our esteemed Chief Guest. Let's come together to set a positive and energetic tone for a day of learning, competition, and innovation.",
    },
    {
      id: 3,
      time: "09:45 AM",
      title: "Workshop",
      src: "https://res.cloudinary.com/dbyxgnjkw/image/upload/v1756633064/dc27b3df-2f54-4b10-8bfb-38d97d13b113_ydsesg.png",
      venue: ["ECE SH "],
      description:
        "The Workshop at Celesta ’25 is a hands-on learning session designed to give participants practical exposure to the latest technologies and industry trends. Guided by experts, helping them stay ahead in the evolving tech landscape.",
    },
    {
      id: 4,
      time: "09:45 AM",
      title: "VISIONHACK",
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236015/VisionHackImg_ntfdbg.jpg",
      venue: ["SF SH1"],
      description:
        "VISIONHACK is an intense 6-hour coding marathon where participants form teams to brainstorm, design, and develop innovative solutions to real-world problems It's a test Of creativity, skill, time management, pushing participants to transform into working prototypes within the limited time frame With mentorship and guidance, the event offers a platform to innovate, collaborate, and showcasein a competitive yet supportive environment.",
    },
    {
      id: 5,
      time: "09:45 AM",
      title: "Paper League",
      venue: ["Mech Smart Classroom", "Cyber Security Lab"],
      src: "https://res.cloudinary.com/dbyxgnjkw/image/upload/v1756731069/WhatsApp_Image_2025-09-01_at_18.18.53_451861a1_tzhbqv.jpg",
      description:
        "An opportunity for students to showcase their innovative ideas and research in front of a panel of experts Participants can present technical papers on trending topics, highlighting creativity, problem-solving, and communication skills.",
    },
    {
      id: 6,
      time: "09:45 AM",
      title: "BreakThru R-1",
      venue: ["SF B03"],
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236006/BreakThroughImg_z0jjf9.jpg",
      description:
        "A coding-based competition designed to test logical thinking, analytical ability, and programming skills. Participants will solve real-world problems within a limited timeframe using their coding knowledge.",
    },
    {
      id: 8,
      time: "09:45 AM",
      title: "Pixel Craft R-1",
      venue: ["SF B01"],
      src: "https://res.cloudinary.com/dbyxgnjkw/image/upload/v1756635369/ui_ux_qefri7.png",
      description:
        "A creative challenge where participants design intuitive and visually appealing user interfaces. This event emphasizes creativity, design principles, and user-centered thinking to deliver impactful digital experiences.",
    },
    {
      id: 17,
      time: "10:30 AM",
      title: "Morning Break",
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1757154405/pexels-pixabay-414628_cl8toc.jpg",
      venue: ["SF Basement"],
      description:
        "The conversation continues! This is the perfect time to discuss the morning's sessions, ask speakers follow-up questions, or connect with fellow participants who share your interests. Refreshments will be served to help you refuel. Make a new connection before the day continues!",
    },
    {
      id: 7,
      time: "11:00 AM",
      title: "BreakThru R-2",
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236006/BreakThroughImg_z0jjf9.jpg",
      venue: ["SF B03"],
      description:
        "A coding-based competition designed to test logical thinking, analytical ability, and programming skills. Participants will solve real-world problems within a limited timeframe using their coding knowledge.",
    },
    {
      id: 9,
      time: "11:00 AM",
      title: "Pixel Craft R-2",
      venue: ["SF B01"],
      src: "https://res.cloudinary.com/dbyxgnjkw/image/upload/v1756635369/ui_ux_qefri7.png",
      description:
        "A creative challenge where participants design intuitive and visually appealing user interfaces. This event emphasizes creativity, design principles, and user-centered thinking to deliver impactful digital experiences.",
    },
    {
      id: 18,
      time: "12:45 PM",
      title: "Lunch Break",
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1757154247/pexels-mikhail-nilov-8102223_kmt5ep.jpg",
      venue: ["Cafeteria First Floor"],
      description:
        "Some of the best ideas are born over a good meal. Enjoy a hearty lunch while continuing the conversations from this morning's sessions. This is a great opportunity for informal discussions with our guest speakers, faculty, and fellow participants. Relax, connect, and get ready for the afternoon!",
    },
    {
      id: 10,
      time: "01:45 PM",
      title: "BreakThru R-1 B-2",
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236006/BreakThroughImg_z0jjf9.jpg",
      venue: ["SF B03"],
      description:
        "A coding-based competition designed to test logical thinking, analytical ability, and programming skills. Participants will solve real-world problems within a limited timeframe using their coding knowledge.",
    },
    {
      id: 12,
      time: "01:45 PM",
      title: "Pixel Craft R-1 B-2",
      src: "https://res.cloudinary.com/dbyxgnjkw/image/upload/v1756635369/ui_ux_qefri7.png",
      venue: ["SF B01"],
      description:
        "A creative challenge where participants design intuitive and visually appealing user interfaces. This event emphasizes creativity, design principles, and user-centered thinking to deliver impactful digital experiences.",
    },
    {
      id: 14,
      time: "01:45 PM",
      title: "QuizXtreme",
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1755446896/ChatGPT_Image_Aug_14__2025__11_46_10_AM_1_i90vu5.png",
      venue: ["SF B02"],
      description:
        "A fast-paced event that challenges participants’ knowledge across multiple domains, including technology, current affairs, and general awareness. It’s the perfect mix of fun and learning.",
    },
    {
      id: 15,
      time: "01:45 PM",
      title: "Guess In A Glance",
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236010/GuessInGlanceImg_zxtfq5.jpg",
      venue: ["FRC"],
      description:
        "A light-hearted, engaging event where participants solve puzzles and decode connections between words, pictures, or ideas. It blends creativity with quick thinking for an entertaining experience.",
    },
    {
      id: 11,
      time: "02:30 PM",
      title: "BreakThru R-2 B-2",
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236006/BreakThroughImg_z0jjf9.jpg",
      venue: ["SF B03"],
      description:
        "A coding-based competition designed to test logical thinking, analytical ability, and programming skills. Participants will solve real-world problems within a limited timeframe using their coding knowledge.",
    },
    {
      id: 13,
      time: "02:30 PM",
      title: "Pixel Craft R-2 B-2",
      src: "https://res.cloudinary.com/dbyxgnjkw/image/upload/v1756635369/ui_ux_qefri7.png",
      venue: ["SF B01"],
      description:
        "A creative challenge where participants design intuitive and visually appealing user interfaces. This event emphasizes creativity, design principles, and user-centered thinking to deliver impactful digital experiences.",
    },
    {
      id: 19,
      time: "03:45 PM",
      title: "Evening Break",
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1757154405/pexels-pixabay-414628_cl8toc.jpg",
      venue: ["SF Basement"],
      description:
        "Before we wrap up an incredible day, take this final opportunity to connect with the amazing people you've met. Exchange ideas and contact details, share your key takeaways from the sessions, and have a final chat with our speakers over evening refreshments.",
    },
    {
      id: 16,
      time: "04:00 PM",
      title: "Felicitation",
      src: "https://res.cloudinary.com/dsz2br3qg/image/upload/v1757154054/pexels-rdne-7648057_yda0cp.jpg",
      venue: ["SF SH1"],
      description:
        "A moment dedicated to expressing our heartfelt gratitude. In this ceremony, we will formally honor our esteemed Chief Guest, dignitaries, and speakers for gracing this occasion with their presence and sharing their invaluable knowledge. We will present them with a memento as a small token of our deep appreciation and respect.",
    },
  ];
  return (
    <div className="p-6 md:p-10 bg-gradient-blue  overflow-y-auto">
      <p className="text-3xl text-center text-gray-900 font-semibold">
        Event Schedule
      </p>
      <div className="flex flex-col gap-y-4 mt-6">
        {/* Map through your event data and display it here */}
        {scheduledEvents.map((event) => {
          return (
            <ScheduleCard
              key={event.id}
              time={event.time}
              title={event.title}
              description={event.description}
              src={event.src}
            />
          );
        })}
      </div>
    </div>
  );
}
