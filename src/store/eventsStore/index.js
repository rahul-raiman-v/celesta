import { create } from 'zustand';
export const EventsStore = create((set) => ({
  events: [
    {
      id: 'technical events',
      title: 'Technical Events',
      img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755235996/CalendarLogo_hncnur.png',
      highlight: false,
      events: [
        {
          id: 'event-1',
          eventTitle: 'Paper League',
          eventType: 'Technical Event',
          date: 'September 26, 2025',
          venue: 'BIT Campus',
          img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755446916/WhatsApp_Image_2025-08-17_at_21.35.26_f3b7650e_n2djqo.jpg',
          brochureLink:'https://drive.google.com/uc?export=download&id=1XGTo2JYwcNnPJOYmfv6Zvwoed2GqhNh8',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:
                'An opportunity for students to showcase their innovative ideas and research in front of a panel of experts Participants can present technical papers on trending topics, highlighting creativity, problem-solving, and communication skills.',
            },
            {
              id: 'rounds',
              title: 'Rounds',
              content: [
                {
                  id: '1',
                  title: 'Round 1',
                  content:
                    'Participants merge two well-known brands into a fresh concept with a unique name, tagline, strategy, and pitch.',
                },
                {
                  id: '2',
                  title: 'Round 2',
                  content:
                    'Teams are given a failing brand to analyse and revive using creative rebranding strategies, target market tweaks, and promotional plans, all presented using a provided PPT template. The event tests creativity, strategy, market insight, and presentation skills.',
                },
              ],
            },
            {
              id: 'rules',
              title: 'Rules',
              content: [
                {
                  id: '1',
                  title: 'Rule 1',
                  content:
                    'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                },
                {
                  id: '2',
                  title: 'Rule 2',
                  content:
                    'Plagiarism will result in immediate disqualification.',
                },
                {
                  id: '3',
                  title: 'Rule 3',
                  content:
                    'Respect the given time limits, late submissions will not be considered.',
                },
                {
                  id: '4',
                  title: 'Rule 4',
                  content:
                    'Participants must BRING and ensure their devices are charged before Round 2. Charging stations may be limited.',
                },
                {
                  id: '5',
                  title: 'Rule 5',
                  content:
                    'Usage of mobile phones or electronic gadgets is strictly prohibited.',
                },
                {
                  id: '6',
                  title: 'Rule 6',
                  content:
                    'Any disputes will be resolved by the judging panel, and their decision will be final.',
                },
              ],
            }, //Rules completed
            {
              id: 'rewards',
              title: 'Rewards',
              content: [
                {
                  id: '1',
                  title: 'Reward 1',
                  content:
                    'Winners & Runners will get a chance to win exiting prizes.',
                },
                {
                  id: '2',
                  title: 'Reward 2',
                  content: 'Top teams will be recognized with awards.',
                },
                {
                  id: '3',
                  title: 'Reward 3',
                  content: 'Participation certificate will be provided.',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                // {
                //   id: 'person1',
                //   name: 'Dr Haritha J',
                //   designation: 'Faculty Co-Ordinator',
                //   email: 'person1@example.com',
                //   phone: '+91 8072285633',
                //   img: 'https://via.placeholder.com/150',
                // },
                {
                  id: 'person2',
                  name: 'Kowshika D',
                  designation: 'Co-Ordinator',
                  email: 'person2@example.com',
                  phone: '+91 8072103089',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Gyanah Prakash V S',
                  designation: 'Co-Ordinator',
                  email: 'person3@example.com',
                  phone: '+91 8681857249',
                  img: 'https://via.placeholder.com/150',
                },
              ],
            }, //completed
          ],
        },
        {
          id: 'event-2',
          eventTitle: 'PixelCraft',
          eventType: 'Technical Event',
          date: 'September 26, 2025',
          venue: 'BIT Campus',
          img: 'https://res.cloudinary.com/dbyxgnjkw/image/upload/v1756635369/ui_ux_qefri7.png',
          brochureLink:
            'https://drive.google.com/uc?export=download&id=1xEhTtOuqf0u93K5_dJtfb87jmbyrE3XY',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:'A creative challenge where participants design intuitive and visually appealing user interfaces. This event emphasizes creativity, design principles, and user-centered thinking to deliver impactful digital experiences.',
            },
            {
              id: 'rounds',
              title: 'Rounds',
              content: [
                {
                  id: '1',
                  title: 'Round 1',
                  content: 'Presentation Round',
                },
              ],
            },
            {
              id: 'rules',
              title: 'Rules',
              content: [
                {
                  id: '1',
                  title: 'Rule 1',
                  content:
                    'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                },
                {
                  id: '2',
                  title: 'Rule 2',
                  content:
                    'Participants must choose the theme on-spot and prepare a PowerPoint presentation.',
                },
                {
                  id: '3',
                  title: 'Rule 3',
                  content:
                    'Plagiarism will result in immediate disqualification.',
                },
                {
                  id: '4',
                  title: 'Rule 4',
                  content:
                    'Respect the given time limits, late submissions will not be considered.',
                },
                {
                  id: '5',
                  title: 'Rule 5',
                  content:
                    'Participants must BRING and ensure their devices are charged before Round 1. Charging stations may be limited.',
                },
                {
                  id: '6',
                  title: 'Rule 6',
                  content:
                    'Usage of mobile phones or electronic gadgets is strictly prohibited.',
                },
                {
                  id: '7',
                  title: 'Rule 7',
                  content:
                    'Any disputes will be resolved by the judging panel, and their decision will be final.',
                },
              ],
            }, //Rules completed
            {
              id: 'rewards',
              title: 'Rewards',
              content: [
                {
                  id: '1',
                  title: 'Reward 1',
                  content:
                    'Winners & Runners will get a chance to win exiting prizes.',
                },
                {
                  id: '2',
                  title: 'Reward 2',
                  content: 'Top teams will be recognized with awards.',
                },
                {
                  id: '3',
                  title: 'Reward 3',
                  content: 'Participation certificate will be provided.',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                // {
                //   id: 'person1',
                //   name: 'Dr Kirupa Sankar M',
                //   designation: 'Faculty Co-Ordinator',
                //   email: 'person1@example.com',
                //   phone: '+91 9994624674',
                //   img: 'https://via.placeholder.com/150',
                // },
                {
                  id: 'person2',
                  name: 'SURYA RAJ S',
                  designation: 'Co-Ordinator',
                  email: 'person2@example.com',
                  phone: '+91 8072137522',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Pooja',
                  designation: 'Co-Ordinator',
                  email: 'person3@example.com',
                  phone: '+91 7871448301',
                  img: 'https://via.placeholder.com/150',
                },
              ],
            },
          ],
        },
        {
          id: 'event-3',
          eventTitle: 'BREAKTHRU',
          eventType: 'Technical Event',
          date: 'September 26, 2025',
          venue: 'BIT Campus',
          img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236006/BreakThroughImg_z0jjf9.jpg',
          brochureLink:
            'https://drive.google.com/uc?export=download&id=13iWqZyk9qgn_mj18umZV1c3Q1WWUtpG_',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:
                'BREAKTHRU is a high-impact problem-solving competition where participants tackle real-world entrepreneurial challenges with creativity and strategy. Teams will analyse the given problem, develop innovative and practical solutions, and present their approach with clarity and conviction. The event tests critical thinking, market insight, and execution skills — rewarding those who can break through obstacles and turn challenges into business opportunities.',
            },
            {
              id: 'rounds',
              title: 'Rounds',
              content: [
                {
                  id: '1',
                  title: 'Round 1',
                  content:
                    'Create and present a compelling business pitch showcasing your solution, strategy, and value proposition.',
                },
                {
                  id: '2',
                  title: 'Round 2',
                  content:
                    'Analyse complex scenarios and defend your approach with logic, adaptability, and clarity.',
                },
              ],
            },
            {
              id: 'rules',
              title: 'Rules',
              content: [
                {
                  id: '1',
                  title: 'Rule 1',
                  content:
                    'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                },
                {
                  id: '2',
                  title: 'Rule 2',
                  content: 'Be on time – late entries not allowed.',
                },
                {
                  id: '3',
                  title: 'Rule 3',
                  content:
                    'Usage of mobile phones or electronic gadgets is strictly prohibited.',
                },
                {
                  id: '4',
                  title: 'Rule 4',
                  content: 'No verbal answers unless told.',
                },
                {
                  id: '5',
                  title: 'Rule 5',
                  content: 'Judging criteria will be announced at the venue.',
                },
                {
                  id: '6',
                  title: 'Rule 6',
                  content:
                    'Points will be provided for correct answers, no negative marking.',
                },
                {
                  id: '7',
                  title: 'Rule 7',
                  content: 'Unfair play leads to disqualification.',
                },
                {
                  id: '8',
                  title: 'Rule 8',
                  content:
                    'Any disputes will be resolved by the judging panel, and their decision will be final.',
                },
              ],
            },
            {
              id: 'rewards',
              title: 'Rewards',
              content: [
                {
                  id: '1',
                  title: 'Reward 1',
                  content:
                    'Winners & Runners will get a chance to win exiting prizes.',
                },
                {
                  id: '2',
                  title: 'Reward 2',
                  content: 'Top teams will be recognized with awards.',
                },
                {
                  id: '3',
                  title: 'Reward 3',
                  content: 'Participation certificate will be provided.',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                // {
                //   id: 'person1',
                //   name: 'Prathap M R',
                //   designation: 'Faculty Co-Ordinator',
                //   email: 'person1@example.com',
                //   phone: '+91 8344480485',
                //   img: 'https://via.placeholder.com/150',
                // },
                {
                  id: 'person2',
                  name: 'Mohanakrishna',
                  designation: 'Co-Ordinator',
                  email: 'person2@example.com',
                  phone: '+91 9360839549',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Sudarsana',
                  designation: 'Co-Ordinator',
                  email: 'person3@example.com',
                  phone: '+91 63795 53236',
                  img: 'https://via.placeholder.com/150',
                },
              ],
            },
          ],
        },
      ],
    },
    {
        id: 'non-technical events',
        title: 'Non-Technical',
        img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236010/GuessInGlanceImg_zxtfq5.jpg',
        highlight: false,
        events: [
            {
            id: 'event-7',
            eventTitle: 'QUIZXtreme',
            eventType: 'Non-Technical Event',
            date: 'September 26, 2025',
            venue: 'BIT Campus',
            img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755446896/ChatGPT_Image_Aug_14__2025__11_46_10_AM_1_i90vu5.png',
            brochureLink:
                'https://drive.google.com/uc?export=download&id=1N1dPZccfe98wYlJHanYtMj4vN1FewWDI',
            highlight: true,
            tabs: [
                {
                id: 'description',
                title: 'Description',
                content:
                    'QuizXtreme is a high-energy quiz competition designed to challenge participants’ knowledge of entrepreneurship, startups, business strategies, and market trends. Competing in multiple exciting rounds, contestants will tackle questions ranging from iconic founders and breakthrough innovations to funding, branding, and real-world case studies. The event tests business acumen, quick thinking, and teamwork — rewarding those with sharp minds and a passion for the entrepreneurial world.',
                },
                {
                id: 'rounds',
                title: 'Rounds',
                content: [
                    {
                    id: '1',
                    title: 'Round 1',
                    content:
                        'Teams compete in the first round. Follow time limits and instructions.',
                    },
                    {
                    id: '2',
                    title: 'Round 2',
                    content:
                        'Teams present in the final round. Adhere to preparation and presentation rules.',
                    },
                ],
                },
                {
                id: 'rules',
                title: 'Rules',
                content: [
                    {
                    id: '1',
                    title: 'Rule 1',
                    content:
                        'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                    },
                    {
                    id: '2',
                    title: 'Rule 2',
                    content:
                        'Maintain discipline and respect coordinators, quizmasters, judges, and other participants.',
                    },
                    {
                    id: '3',
                    title: 'Rule 3',
                    content:
                        'Cheating, plagiarism, or outside assistance will result in immediate disqualification.',
                    },
                    {
                    id: '4',
                    title: 'Rule 4',
                    content:
                        'Usage of mobile phones or electronic gadgets is strictly prohibited.',
                    },
                    {
                    id: '5',
                    title: 'Rule 5',
                    content:
                        'Any disputes will be resolved by the judging panel and their decision will be final.',
                    },
                ],
                },
                {
                id: 'rewards',
                title: 'Rewards',
                content: [
                    {
                    id: '1',
                    title: 'Reward 1',
                    content:
                        'Winners & Runners will get a chance to win exiting prizes.',
                    },
                    {
                    id: '2',
                    title: 'Reward 2',
                    content: 'Top teams will be recognized with awards.',
                    },
                    {
                    id: '3',
                    title: 'Reward 3',
                    content: 'Participation certificate will be provided.',
                    },
                ],
                },
                {
                id: 'contact',
                title: 'Contact',
                content: [
                    // {
                    // id: 'person1',
                    // name: 'Nandhini K M',
                    // designation: 'Faculty Co-Ordinator',
                    // email: 'person1@example.com',
                    // phone: '+91 9788005115',
                    // img: 'https://via.placeholder.com/150',
                    // },
                    {
                    id: 'person2',
                    name: 'Pooja K',
                    designation: 'Co-Ordinator',
                    email: 'person3@example.com',
                    phone: '+91 7871448301',
                    img: 'https://via.placeholder.com/150',
                    },
                    {
                    id: 'person3',
                    name: ' Mariya Christy V',
                    designation: 'Co-Ordinator',
                    email: 'person3@example.com',
                    phone: '+91 9344265121',
                    img: 'https://via.placeholder.com/150',
                    },
                ],
                },
            ],
            },
            {
          id: 'event-5',
          eventTitle: 'Guess In A Glance',
          eventType: 'Non-Technical Event',
          date: 'September 26, 2025',
          venue: 'BIT Campus',
          img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236010/GuessInGlanceImg_zxtfq5.jpg',
          brochureLink:
            'https://drive.google.com/uc?export=download&id=11mQUgy5wm-nFdtjrKmp43m2pEuNZ1_hN',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:
                'Guess in A Glance is an electrifying event designed to keep participants on their toes through two thrilling stages. Each team will consist of 4–5 members, fostering teamwork, quick thinking, and collaboration. Only the top-performing teams from the first round will make it to the grand second round, ensuring a truly competitive spirit. The topics for both rounds will be revealed right at the venue, bringing a wave of surprise, energy, and excitement to the challenge. With every second counting, this event promises non-stop fun and an adrenaline rush for all participants.',
            },
            {
              id: 'rounds',
              title: 'Rounds',
              content: [
                {
                  id: '1',
                  title: 'Round 1',
                  content:
                    'Teams compete in the first round and best performers will be shortlisted.',
                },
                {
                  id: '2',
                  title: 'Round 2',
                  content: 'Fun filled final round with interesting twists.',
                },
              ],
            },
            {
              id: 'rules',
              title: 'Rules',
              content: [
                {
                  id: '1',
                  title: 'Rule 1',
                  content:
                    'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                },
                {
                  id: '2',
                  title: 'Rule 2',
                  content:
                    'Points will be provided for correct answers, no negative marking.',
                },
                {
                  id: '3',
                  title: 'Rule 3',
                  content: 'Unfair play leads to disqualification.',
                },
                {
                  id: '4',
                  title: 'Rule 4',
                  content: 'Judging criteria will be announced at the venue.',
                },
                {
                  id: '5',
                  title: 'Rule 5',
                  content: 'No verbal answers unless told.',
                },
                {
                  id: '6',
                  title: 'Rule 6',
                  content:
                    'Any disputes will be resolved by the judging panel, and their decision will be final.',
                },
              ],
            },
            {
              id: 'rewards',
              title: 'Rewards',
              content: [
                {
                  id: '1',
                  title: 'Reward 1',
                  content:
                    'Winners & Runners will get a chance to win exiting prizes.',
                },
                {
                  id: '2',
                  title: 'Reward 2',
                  content: 'Top teams will be recognized with awards.',
                },
                {
                  id: '3',
                  title: 'Reward 3',
                  content: 'Participation certificate will be provided.',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                // {
                //   id: 'person1',
                //   name: 'Kumaresan K',
                //   designation: 'Faculty Co-Ordinator',
                //   email: 'person1@example.com',
                //   phone: '+91 6374412828',
                //   img: 'https://via.placeholder.com/150',
                // },
                {
                  id: 'person2',
                  name: 'Himashree K',
                  designation: 'Co-Ordinator',
                  email: 'person3@example.com',
                  phone: '+91 9092533465',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Naresh',
                  designation: 'Co-Ordinator',
                  email: 'person3@example.com',
                  phone: '+91 9361701233',
                  img: 'https://via.placeholder.com/150',
                },
              ],
            },
          ],
            },
        ],
    },
    {
      id: 'hackathon',
      title: 'Hackathon',
      img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755598251/Data_extraction-rafiki_n0vcce.png',
      highlight: false,
      events: [
        {
          id: 'event-8',
          eventTitle: 'VISIONHACK',
          eventType: 'Hackathon',
          date: 'September 26, 2025',
          venue: 'BIT Campus',
          img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236015/VisionHackImg_ntfdbg.jpg',
          brochureLink:
            'https://drive.google.com/uc?export=download&id=1OmXxEo7JImawGBr9NrxqogMpM86fLYiu',
          // problemLink:
          //   'https://drive.google.com/uc?export=download&id=1qtL1Lcn_eVOlgIf4WI8bk0g5klGbW_Mc',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:
                "VISIONHACK is an intense 6-hour coding marathon where participants form teams to brainstorm, design, and develop innovative solutions to real-world problems It's a test Of creativity, skill, time management, pushing participants to transform into working prototypes within the limited time frame With mentorship and guidance, the event offers a platform to innovate, collaborate, and showcasein a competitive yet supportive environment.",
            },
            {
              id: 'rounds',
              title: 'Rounds',
              content: [
                {
                  id: '1',
                  title: 'Round 1',
                  content: 'One round with multiple sessions.',
                },
              ],
            },
            {
              id: 'rules',
              title: 'Rules',
              content: [
                {
                  id: '1',
                  title: 'Rule 1',
                  content:
                    'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                },
                {
                  id: '2',
                  title: 'Rule 2',
                  content:
                    'Problem statements will be provided at the start of the event, and teams must choose one to work on.',
                },
                {
                  id: '3',
                  title: 'Rule 3',
                  content:
                    'Solutions must align with the event’s given problem statements or themes.',
                },
                {
                  id: '4',
                  title: 'Rule 4',
                  content:
                    'All projects must be developed within the allotted hackathon duration of 8 hours.',
                },
                {
                  id: '5',
                  title: 'Rule 5',
                  content:
                    'Solutions must align with the event’s given problem statements or themes.',
                },
                {
                  id: '6',
                  title: 'Rule 6',
                  content:
                    'Projects must be original; plagiarism or use of AI tool or pre-built solutions is prohibited.',
                },
                {
                  id: '7',
                  title: 'Rule 7',
                  content:
                    'Open-source tools and libraries are allowed; licensed software must be used legall',
                },
                {
                  id: '8',
                  title: 'Rule 8',
                  content:
                    'Teams must submit source code, a brief documentation, and a final pitch/demo before the deadline.',
                },
                {
                  id: '9',
                  title: 'Rule 9',
                  content:
                    'Judging Criteria: Innovation, functionality, design, relevance to theme, and presentation quality.',
                },
              ],
            },
            {
              id: 'rewards',
              title: 'Rewards',
              content: [
                {
                  id: '1',
                  title: 'Reward 1',
                  content:
                    'Winners & Runners will get a chance to win exiting prizes.',
                },
                {
                  id: '2',
                  title: 'Reward 2',
                  content: 'Top teams will be recognized with awards.',
                },
                {
                  id: '3',
                  title: 'Reward 3',
                  content: 'Participation certificate will be provided.',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                // {
                //   id: 'person1',
                //   name: 'Vaidhyanathan B',
                //   designation: 'Faculty Co-Ordinator',
                //   email: 'person1@example.com',
                //   phone: '+91 7395887646',
                //   img: 'https://via.placeholder.com/150',
                // },
                {
                  id: 'person2',
                  name: 'Rahul P',
                  designation: 'Co-Ordinator',
                  email: 'person3@example.com',
                  phone: '+91 9361212442',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Mithunram SU',
                  designation: 'Co-Ordinator',
                  email: 'person3@example.com',
                  phone: '+91 9488906451',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Harish',
                  designation: 'Co-Ordinator',
                  email: 'person3@example.com',
                  phone: '+91 8870832669',
                  img: 'https://via.placeholder.com/150',
                }
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'workshop',
      title: 'Workshop',
      img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236016/WorkshopLogo_ta3dgh.png',
      highlight: false,
      events: [
        {
          id: 'workshop-1',
          eventTitle: 'Workshop',
          eventType: 'Startup Workshop',
          img: 'https://res.cloudinary.com/dbyxgnjkw/image/upload/v1756633064/dc27b3df-2f54-4b10-8bfb-38d97d13b113_ydsesg.png',
          date: 'September 26, 2025',
          venue: 'BIT Campus',
          brochureLink:
            'https://drive.google.com/uc?export=download&id=1p1zoVgGq30k_8IQwt88hR9djsMP5ur9Q',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:
                'The Workshop is a hands-on learning session to give participants practical exposure to the latest technologies and industry trends Guided by expert4 it focuses interactive training real-time demonstrations,and activities that go beyond classroom learning. The session aims to equip students with valuable and knowledge, helping them stay ahead in the evolving tech landscape. Sparks into successful ventures, Transforming innovative ideas into protected, market-ready businesses through design thinking and smart IP strategies.',
            },
            {
              id: 'prerequisites',
              title: 'Prerequisites',
              content: [
                'This workshop is open to all students, innovators, and aspiring entrepreneurs with a passion for technology, innovation, and problem-solving. No prior technical expertise is required — just curiosity, creativity, and a willingness to engage in hands-on learning. Participants from any academic or professional background are welcome to join and explore how emerging technologies, design thinking, and smart IP strategies can transform ideas into impactful ventures.',
              ],
            },
            {
              id: 'speakers',
              title: 'Speakers',
              content: [
                {
                  id: '1',
                  speakerName: 'Dr K Balakrishnan',
                  designation: 'CEO of TBI',
                },
                {
                  id: '2',
                  speakerName: 'Mr Sezhiyan Bharathi',
                  designation: 'IPR - Corporate Trainer',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                // {
                //   id: 'person1',
                //   name: 'Dr Dhanasekar R',
                //   designation: 'Co-Ordinator',
                //   email: 'person1@example.com',
                //   phone: '+91 8508457659',
                //   img: 'https://via.placeholder.com/150',
                // },
                {
                  id: 'person2',
                  name: 'Hari Hara Sudhan',
                  designation: 'Co-Ordinator',
                  email: 'person2@example.com',
                  phone: '+91 8870731577',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Preethika S',
                  designation: 'Co-Ordinator',
                  email: 'person3@example.com',
                  phone: '+91 6381878288',
                  img: 'https://via.placeholder.com/150',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}));