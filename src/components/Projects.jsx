import { useState } from 'react';
import ProjectItem from './ProjectItem';
import ProjectModal from './ProjectModal';
import images from '../assets/images';

const data = [
  {
    img: images.gradingPortalImages[0],
    title: 'Academic Grading Portal',
    details: ' Python | Django | AWS EC2 | Javascript',
    images: images.gradingPortalImages,
    description: [
      'Developed a Django-based web server to dynamically generate and manage academic content. Implemented secure user authentication and role-based access controls for data integrity.',
      'Executed a full-scale deployment of the application on Amazon Web Services (AWS) EC2, configured HTTPS with Let\'s Encrypt for secure data transmission.',
    ],
    link: [
      'https://github.com/husnain24/AcademicGradingPortal',
    ],
  },
  {
    img: images.mobileDrawingApp[0],
    title: 'Full Stack Android Drawing App',
    details: 'Kotlin | C++ | Firebase | Android Studio',
    images: images.mobileDrawingApp,
    description: [
      'Designed an Android app to enable intuitive drawing and sketch modifications. Integrated persistent data storage using Room and enhanced UI with Jetpack Compose.',
      'Added social features to share images and manage user authentication via Firebase.',
    ],
    link: [
      'https://github.com/husnain24/AndroidDrawingApp',
    ],
  },
  {
    img: images.spriteEditorImages[0],
    title: 'Sprite Editor App',
    details: 'C++ | QT Creator',
    images: images.spriteEditorImages,
    description: [
      'This application allows users to load, save and edit their sprite pixel art while also providing them with an assortment of drawing tools. It also allows them to preview their sprite animations and create art of different sizes.',
      'This project is a testament to effective teamwork, as we collectively implemented the Agile and adhered to industry best practices. The result is an application that blends technological sophistication with intuitive user experience, offering a comprehensive platform for sprite art and animation exploration.',
    ],
    link: [
      'none',
    ],
  },
  {
    img: images.snakeImages[0],
    title: 'Snake Server/Client Game',
    details: 'C# | .NET MAUI',
    images: images.snakeImages,
    description: [
      'This is an online multiplayer Snake Game built off of the original game complete with a dedicated server and a game client, a joint effort between my partner and me. We employed C# and .NET MAUI to architect both components, focusing on the TCP/IP protocol for communication.',
      "Operating across platforms, thanks to Microsoft's .NET MAUI framework, the game capitalizes on parallel computing and multi-threading to ensure smooth gameplay, accommodating multiple players concurrently. Notably, the server offers adjustable modular game settings and diverse game modes to enrich the gaming experience.",
    ],
    link: ['none'],
  },
  {
    img: images.timeManagementImages[0],
    title: 'Time Management Suite',
    details: 'JavaScript | HTML | CSS',
    images: images.timeManagementImages,
    description: [
      'This is a productivity suite app that blends functionality and user experience. It offers a trio of essential tools: a customizable timer, a curated selection of music, and a feature-rich to-do list.',
      'This suite serves as an organizational hub, encouraging users to structure their tasks efficiently and track progress as they navigate their goals. With a focus on enhancing productivity, the timer function keeps users on track, while the array of study music options creates an immersive work environment. Leveraging the capabilities of local storage, user progress and tasks are saved, making it a better experience across sessions.',
    ],
    link: ['https://github.com/husnain24/Productivity-App'],
  },
  {
    img: images.spreadsheetImages[0],
    title: 'Spreadsheet Application',
    details: 'C# | .NET MAUI',
    images: images.spreadsheetImages,
    description: [
      'Introducing a user-friendly spreadsheet application designed to help you manage your data effortlessly. This app offers all the tools you need to input and save text and numbers, along with a variety of options to perform calculations and better organize your information using formulas and functions.',
      "You can easily create, edit, and save your spreadsheets using the .ssp file format. This application works on different devices thanks to Microsoft's .NET MAUI framework, ensuring a consistent experience across platforms. Whether you're new to spreadsheets or a seasoned user, this app simplifies data management, making it accessible and convenient for all.",
    ],
    link: ['none'],
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
        link={modalData.link}
      />
    </div>
  );
};
export default Projects;