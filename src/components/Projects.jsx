import { useState } from 'react';
import ProjectItem from './ProjectItem';
import snakeGame from '../assets/SnakeGame.png';
import timeManagementApp from '../assets/TimeManagement.png';
import spriteEditor from '../assets/SpriteEditor.png';
import spreadsheet from '../assets/SpreadsheetApp.png';
import ProjectModal from './ProjectModal';

// Random
import snake1 from '../assets/SnakeProject/wholeScreen.png';
import snake2 from '../assets/SnakeProject/server.png';
import snake3 from '../assets/SnakeProject/deadSnake.png';

const data = [
  {
    img: spriteEditor,
    title: 'Sprite Editor App',
    details: 'C++ | QT Creator',
    images: [snake1, snake2, snake3],
    description: [
      'Allows users to load, save and edit the sprite pixel art while also providing them with an assortment of drawing tools.',
      'Also allows them to preview their sprite animations and configure different sizes.',
      'Collaborated with a team utilizing proper software practices to build.',
    ],
    // 'Allows users to load, save and edit the sprite pixel art while also providing them with an assortment of drawing tools. Also allows them to preview their sprite animations and configure different sizes. Collaborated with a team utilizing proper software practices to build.',
  },
  {
    img: snakeGame,
    title: 'Snake Server/Client Game',
    details: 'C# | .NET MAUI',
    images: [snake1, snake2, snake3],
    description: [
      'Online Multiplayer game of Snake with a server and game client. Collaborated with a friend to design the server and client architecture for this game utilizing the TCP/IP protocol.',
      'It’s a cross platform game given Microsoft’s .NET MAUI framework. Utilizes parallel-computing/multi-threading so it can handle multiple concurrent players. The server provides editable modular game settings as well as different game modes.',
    ],
    // 'Online Multiplayer game of Snake with a server and game client. Collaborated with a friend to design the server and client architecture for this game utilizing the TCP/IP protocol. It’s a cross platform game given Microsoft’s .NET MAUI framework. Utilizes parallel-computing/multi-threading so it can handle multiple concurrent players. The server provides editable modular game settings as well as different game modes.',
  },
  {
    img: timeManagementApp,
    title: 'Time Management Suite',
    details: 'JavaScript | HTML | CSS',
    images: [snake1, snake2, snake3],
    description: [
      'Provides user with a timer, a music selection, and a complete to-do list to stay productive.',
      'Enhance productivity by providing users with a medium of organizing their tasks and marking them complete as they go.',
      'Provides users a timer they can set to stay on task as well as some study music playing options. Utilized local storage to keep progress and save the user’s tasks. Hosted through Replit',
    ],
    // 'Provides user with a timer, a music selection, and a complete to-do list to stay productive. Enhance productivity by providing users with a medium of organizing their tasks and marking them complete as they go. Provides users a timer they can set to stay on task as well as some study music playing options. Utilized local storage to keep progress and save the user’s tasks. Hosted through Replit',
  },
  {
    img: spreadsheet,
    title: 'Spreadsheet Application',
    details: 'C# | .NET MAUI',
    images: [snake1, snake2, snake3],
    description: ['testing'],
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 pb-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>Here are some of my projects!</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {data.map((item) => (
          <ProjectItem
            key={item.title}
            img={item.img}
            title={item.title}
            details={item.details}
            onClick={() => openModal(item)}
          ></ProjectItem>
        ))}
      </div>
      <ProjectModal
        isOpen={modalOpen}
        onClose={closeModal}
        title={modalData.title}
        details={modalData.details}
        images={modalData.images}
        description={modalData.description}
      />
    </div>
  );
};
export default Projects;

// import ProjectItem from './ProjectItem';
// import snakeGame from '../assets/SnakeGame.png';
// import timeManagementApp from '../assets/TimeManagement.png';
// import dataStructureTeachingApp from '../assets/DataStructureTeachingApp.png';

// const data = [
//   {
//     img: snakeGame,
//     title: 'Snake Server/Client Game',
//     details: 'C# | .NET MAUI',
//   },
//   {
//     img: timeManagementApp,
//     title: 'Time Management Suite',
//     details: 'JavaScript | HTML | CSS',
//   },
//   {
//     img: dataStructureTeachingApp,
//     title: 'Data Structure Educational App',
//     details: 'C++ | QT Creator',
//   },
// ];

// const Projects = () => {
//   return (
//     <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
//       <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
//         Projects
//       </h1>
//       <p className='text-center py-8'>Here are some of my projects!</p>
//       <div className='grid sm:grid-cols-2 gap-12'>
//         {data.map((item) => (
//           <ProjectItem
//             img={item.img}
//             title={item.title}
//             details={item.details}
//           ></ProjectItem>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Projects;
