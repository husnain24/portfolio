import { useState } from 'react';
import ProjectItem from './ProjectItem';
import snakeGame from '../assets/SnakeGame.png';
import timeManagementApp from '../assets/TimeManagement.png';
import dataStructureTeachingApp from '../assets/DataStructureTeachingApp.png';
import ProjectModal from './ProjectModal';

// Random
import rand1 from '../assets/rand1.png';
import rand2 from '../assets/rand2.png';
import rand3 from '../assets/rand3.jpg';

const data = [
  {
    img: snakeGame,
    title: 'Snake Server/Client Game',
    details: 'C# | .NET MAUI',
    images: [rand1, rand2, rand3],
  },
  {
    img: timeManagementApp,
    title: 'Time Management Suite',
    details: 'JavaScript | HTML | CSS',
    images: [rand1, rand2, rand3],
  },
  {
    img: dataStructureTeachingApp,
    title: 'Data Structure Educational App',
    details: 'C++ | QT Creator',
    images: [rand1, rand2, rand3],
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
