import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectModal = ({
  isOpen,
  onClose,
  title,
  details,
  images,
  description,
  link,
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div
        className='modal-overlay fixed inset-0 bg-black opacity-50'
        onClick={onClose}
      ></div>
      <div className='modal z-10 bg-white p-6 rounded-lg w-[80%] max-w-2xl'>
        <button
          className='modal-close text-3xl absolute top-2 right-2 text-white'
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className='modal-title text-2xl font-semibold text-gray-800 mb-2'>
          {title}
        </h2>
        <Carousel showThumbs={false}>
          {images.map((image, index) => (
            <div className='w-' key={index}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </Carousel>
        <div className='mt-4 flex justify-between '>
          <p className='modal-details text-gray-600'>{`Technologies: ${details}`}</p>
          <>
            {title == 'Time Management Suite' ? (
              <div className='flex justify-center align-middle gap-2'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-0.5 px-1 rounded'>
                  <a
                    href='https://github.com/husnain24/Productivity-App'
                    target='_blank'
                  >
                    Github
                  </a>
                </button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-0.5 px-1 rounded'>
                  <a
                    href='https://productivity-app.splash23.repl.co/'
                    target='_blank'
                  >
                    Live
                  </a>
                </button>
              </div>
            ) : (
              <></>
            )}
          </>
        </div>
        <div className='mt-4 text-xl'>
          <ul>
            {description.map((text, i) => {
              return <li key={i}>{text}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
