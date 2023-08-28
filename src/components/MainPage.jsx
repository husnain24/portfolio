import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const MainPage = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover '
        src='https://media.istockphoto.com/id/1185747322/photo/blue-mesh-gradient-blurred-motion-abstract-background.jpg?b=1&s=612x612&w=0&k=20&c=EU2Le9ohrdXYHEVfYAmiHAhYPk7eyRj5XTnJwctd7tA='
        alt=''
      />
      <div className='w-full h-screen absolute top-0 left-0'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl pl-9 font-bold text-white'>
            I'm Husnain Ahmad
          </h1>
          <h2 className='sm:text-xl text-2xl pt-4 pl-9 text-white'>
            I'm a passionate programmer and here's some of my work!
          </h2>
          <div className='flex justify-between pt-6 pl-9 max-w-[200px] w-full'>
            <a href='https://www.youtube.com/' target='_blank'>
              <FaLinkedinIn
                size={25}
                color='white'
                className='cursor-pointer'
              />
            </a>

            <a href='https://www.youtube.com/' target='_blank'>
              <FaGithub size={25} color='white' className='cursor-pointer' />
            </a>

            <a href='https://www.youtube.com/' target='_blank'>
              <FaInstagram size={25} color='white' className='cursor-pointer' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
