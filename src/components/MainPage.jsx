import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import profilePic from '../assets/profilePic.jpg';

const MainPage = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover '
        src='https://media.istockphoto.com/id/1185747322/photo/blue-mesh-gradient-blurred-motion-abstract-background.jpg?b=1&s=612x612&w=0&k=20&c=EU2Le9ohrdXYHEVfYAmiHAhYPk7eyRj5XTnJwctd7tA='
        alt=''
      />
      <div className='flex flex-col  items-center justify-center w-full h-screen absolute top-0 left-0 lg:items-start'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <div className='w-[200px] h-[200px] flex items-center justify-center pb-16 lg:ml-9'>
            <div className='border border-white rounded-full overflow-hidden w-[200px] h-[200px]'>
              <img
                src={profilePic}
                alt=''
                className='object-cover w-full h-full'
              />
            </div>
          </div>
          <h1 className='sm:text-5xl text-4xl pl-9 font-bold text-white'>
            I'm Husnain Ahmad
          </h1>
          <h2 className='sm:text-xl text-xl pt-4 pl-9 text-white'>
            Welcome to my digital space! I'm a dedicated programmer currently
            pursuing a degree in Computer Science. I enjoy solving complex
            problems and finding innovative solutions. Beyond my coding
            endeavors, I love playing sports and enjoy the outdoors. Whether
            you're here to explore my projects or get to know be a bit more,
            feel free to connect with me through my socials or the contact
            section below.
          </h2>
          <div className='flex justify-between pt-6 pl-9 max-w-[200px] w-full'>
            <a
              href='https://www.linkedin.com/in/husnainahmad24'
              target='_blank'
            >
              <FaLinkedinIn
                size={25}
                color='white'
                className='cursor-pointer'
              />
            </a>
            <a href='https://github.com/husnain24' target='_blank'>
              <FaGithub size={25} color='white' className='cursor-pointer' />
            </a>
            <a href='https://www.instagram.com/husnain_03/' target='_blank'>
              <FaInstagram size={25} color='white' className='cursor-pointer' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
