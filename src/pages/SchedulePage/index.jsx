import { PaperPresentationImg } from "../../assets";
import { ScheduleCard } from "../../components";

export default function SchedulePage() {
  const scheduledEvents = [
    {
      id: 1,
      time: "08:00 AM",
      title: "Registration",
      venue:["Parking Lot"],
      description:
        "An opportunity for students to showcase their innovative ideas and research in front of a panel of experts. Participants can present technical papers on trending topics, highlighting creativity, problem-solving, and communication skills.",
    },
    {
      id: 2,
      time: "09:00 AM",
      title: "Inaugration Session",
      venue:["SF SH1"],
      description:
        "An interactive session where participants can learn and apply new skills in a hands-on environment.",
    },
    {
      id: 3,
      time: "09:45 AM",
      title: "Workshop",
      venue:["ECE SH "],
      description:
        "A chance for participants to connect and share ideas over lunch.",
    },
    {
      id: 4,
      time: "09:45 AM",
      title: "Hackathon",
      venue:["SF SH1"],
      description:
        "A moderated discussion with industry experts on current trends and future directions.",
    },
    {
      id: 5,
      time: "09:45 AM",
      title: "Paper League",
      venue:["Mech Smart Classroom","Cyber Security Lab"],
      description: "Final thoughts and takeaways from the event.",
    },
    {
      id: 6,
      time: "09:45 AM",
      title: "BreakThru R-1",
      venue:["SF B03"],
      description:
        "An open forum for participants to share their thoughts and suggestions for future events.",
    },
    {
      id: 8,
      time: "09:45 AM",
      title: "Pixel Craft R-1",
      venue:["SF B01"],
      description: ""
    },
    {
      id: 17,
      time:"10:30",
      title:"Morning Break",
      venue:["SF Basement"],
      description:""
    },
    {
      id: 7,
      time: "11:00 AM",
      title: "BreakThru R-2",
      venue:["SF B03"],
      description:
        "A final gathering to celebrate the achievements of the event and acknowledge participants.",
    },
    {
      id: 9,
      time: "11:00 AM",
      title: "Pixel Craft R-2",
      venue:["SF B01"],
      description: ""
    },
    {
      id:18,
      time:"12:45 PM",
      title:"Lunch Break",
      venue:["Cafeteria First Floor"],
      description:""
    },
    {
      id: 10,
      time: "01:45 PM",
      title: "BreakThru R-1 B-2",
      venue:["SF B03"],
      description: ""
    },
    {
      id: 12,
      time: "01:45 PM",
      title: "Pixel Craft R-1 B-2",
      venue:["SF B01"],
      description: ""
    },
    {
      id: 14,
      time: "01:45 PM",
      title: "QuizXtreme",
      venue:["SF B02"],
      description: ""
    },
    {
      id: 15,
      time: "01:45 PM",
      title: "Guess In A Glance",
      venue:["FRC"],
      description: ""
    },
    {
      id: 11,
      time: "02:30 PM",
      title: "BreakThru R-2 B-2",
      venue:["SF B03"],
      description: ""
    },
    {
      id: 13,
      time: "02:30 PM",
      title: "Pixel Craft R-2 B-2",
      venue:["SF B01"],
      description: ""
    },
    {
      id:19,
      time:"03:45 PM",
      title:"Evening Break",
      venue:["SF Basement"],
      description:""
    },
    {
      id: 16,
      time: "04:00 PM",
      title: "Felicitation",
      venue:["SF SH1"],
      description: ""
    }
  ];
  return (
    <div className="p-6 md:p-10 bg-gradient-blue h-[calc(100vh-7rem)] overflow-y-auto">
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
            />
          );
        })}
      </div>
    </div>
  );
}
