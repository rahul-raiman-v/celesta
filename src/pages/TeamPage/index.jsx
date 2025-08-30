import { TeamCard } from "../../components";


export default function TeamPage() {
    const advisoryCommittee = [
        {
            id: 1,
            name:" Balasubramaniam S V",
            image:"https://www.bitsathy.ac.in/wp-content/uploads/2022/08/chairman.webp",
            designation:"Chairman",
        },
        {
            id: 2,
            name:"Dr Palanisamy C",
            image:"https://www.bitsathy.ac.in/wp-content/uploads/Principal-dep.jpg",
            designation:"Principal",
        },
        {
            id: 3,
            name:"Dr Sivakumar K",
            image:"https://www.bitsathy.ac.in/wp-content/uploads/Dr-Sivakumar-K.jpg",
            designation:"Dean",
        },
    ];
    const  teamCelesta = [
        {
            id: 1,
            name: 'Dr Dhanasekar R',
            designation: 'Faculty',
            image:
                'https://www.bitsathy.ac.in/wp-content/uploads/Mr-Dhanasekar-R.png',
        },
        {
            id: 2,
            name: 'Nandhini K M',
            designation: 'Faculty',
            image:
                'https://www.bitsathy.ac.in/wp-content/uploads/Ms-Nandhini-K-M.png',
            
        },
        {
        id: 3,
        name: 'Prathap M R',
        designation: 'Faculty',
        image: 'https://www.bitsathy.ac.in/wp-content/uploads/Mr-Prathap-M-R.jpg',
        },

    ];
    const studentCoordinators = [
        {
      id: 1,
      name: 'Surya Raj S',
      designation: 'Overall Incharge',
      image: 'https://codecirclebitsathy.netlify.app/images/team/surya.jpg',
      phone: '+91 8072137522',
      email: 'VICE PRESIDENT',
    },
    {
      id: 2,
      name: 'Ahill Pranav M',
      designation: 'Overall Incharge',
      image:
        'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755083167/IMG_4528_1_afbily.jpg',
      phone: '+91 9940911411',
      email: 'PEOPLE MANAGEMENT COORDINATOR',
    },
    {
      id: 3,
      name: 'Swetha Gayathri V',
      designation: 'Overall Incharge',
      image: 'https://codecirclebitsathy.netlify.app/images/team/swetha.jpg',
      phone: '+91 9342896561',
      email: 'JOINT SECRETARY',
    },
    {
      id: 4,
      name: 'Preethika S',
      designation: 'Overall Incharge',
      image: 'https://codecirclebitsathy.netlify.app/images/team/preethika.png',
      phone: '+91 6381878288',
      email: 'EVENT COORDINATOR OF CLUB',
    },
    ];
    return (
        <div className="flex flex-col gap-y-5 p-6 md:p-10 xl:p-16 bg-gradient-blue h-[calc(100vh-7rem)] overflow-y-auto">
            <div className="flex flex-col gap-y-5">
                <p className="text-3xl text-white font-semibold text-center ">Advisory Committee</p>
                <div className="flex flex-wrap gap-5 items-center justify-center ">
                    {advisoryCommittee.map((member) => (
                        <TeamCard key={member.id} {...member} variant={"faculty"} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-y-5">
                <p className="text-3xl text-white font-semibold text-center ">Team Celesta</p>
                <div className="flex flex-wrap gap-5 items-center justify-center ">
                    {teamCelesta.map((member) => (
                        <TeamCard key={member.id} {...member} variant={"faculty"} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-y-5">
                <p className="text-3xl text-white font-semibold text-center ">Student Co-Ordinators</p>
                <div className="flex flex-wrap gap-5 items-center justify-center ">
                    {studentCoordinators.map((member) => (
                        <TeamCard key={member.id} {...member}  />
                    ))}
                </div>
            </div>
        </div>
    );
}
