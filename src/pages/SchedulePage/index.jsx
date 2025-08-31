import { PaperPresentationImg } from "../../assets";
import { ScheduleCard } from "../../components";

export default function SchedulePage() {
  const scheduledEvents = [
    {
      id: 1,
      time: "10:00 AM",
      title: "Paper Presentation",
      description:
        "An opportunity for students to showcase their innovative ideas and research in front of a panel of experts. Participants can present technical papers on trending topics, highlighting creativity, problem-solving, and communication skills.",
    },
    {
      id: 2,
      time: "11:00 AM",
      title: "Workshop",
      description:
        "An interactive session where participants can learn and apply new skills in a hands-on environment.",
    },
    {
      id: 3,
      time: "12:00 PM",
      title: "Networking Lunch",
      description:
        "A chance for participants to connect and share ideas over lunch.",
    },
    {
      id: 4,
      time: "1:00 PM",
      title: "Panel Discussion",
      description:
        "A moderated discussion with industry experts on current trends and future directions.",
    },
    {
      id: 5,
      time: "2:00 PM",
      title: "Closing Remarks",
      description: "Final thoughts and takeaways from the event.",
    },
    {
      id: 6,
      time: "3:00 PM",
      title: "Feedback Session",
      description:
        "An open forum for participants to share their thoughts and suggestions for future events.",
    },
    {
      id: 7,
      time: "4:00 PM",
      title: "Closing Ceremony",
      description:
        "A final gathering to celebrate the achievements of the event and acknowledge participants.",
    },
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
