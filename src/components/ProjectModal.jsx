// import React from 'react';

// const ProjectModal = ({ isOpen, onClose, title, details }) => {
//   if (!isOpen) return null;

//   return (
//     <div className='fixed inset-0 flex items-center justify-center z-50'>
//       <div
//         onClick={onClose}
//         className='modal-overlay fixed inset-0 bg-black opacity-50'
//       ></div>
//       <div className='modal z-10 bg-white p-4 rounded-lg w-96'>
//         <button
//           className='modal-close absolute top-2 right-2 text-gray-600'
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <h2 className='modal-title text-xl font-semibold text-gray-800 mb-2'>
//           {title}
//         </h2>
//         <p className='modal-details text-gray-600'>{details}</p>
//         {/* Add more content here, like images and additional information */}
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

// const ProjectModal = ({ isOpen, onClose, title, details, images }) => {
//   if (!isOpen) return null;

//   return (
//     <div className='fixed inset-0 flex items-center justify-center z-50'>
//       <div
//         className='modal-overlay fixed inset-0 bg-black opacity-50'
//         onClick={onClose}
//       ></div>
//       <div className='modal z-10 bg-white p-4 rounded-lg w-96'>
//         <button
//           className='modal-close absolute top-2 right-2 text-gray-600'
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <h2 className='modal-title text-xl font-semibold text-gray-800 mb-2'>
//           {title}
//         </h2>
//         {/* Carousel */}
//         <Carousel showThumbs={false}>
//           {images.map((image, index) => (
//             <div key={index}>
//               <img src={image} alt={`Image ${index}`} />
//             </div>
//           ))}
//         </Carousel>
//         {/* Project Description */}
//         <div className='mt-4'>
//           <p className='modal-details text-gray-600'>{details}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectModal = ({ isOpen, onClose, title, details, images }) => {
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
            <div key={index}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </Carousel>
        <div className='mt-4'>
          <p className='modal-details text-gray-600'>{details}</p>
        </div>
        <div className='mt-4'>
          <p className='text-gray-800'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            justo eu ligula interdum aliquam. Fusce euismod dapibus turpis et
            convallis. Nullam euismod turpis nec ultrices lacinia.
          </p>
          <p className='text-gray-800 mt-2'>
            Sed finibus enim vel neque ultricies, in consectetur lorem
            vestibulum. Nulla facilisi. Fusce et tellus eu mi congue vulputate.
            Suspendisse at turpis auctor, auctor tellus eget, volutpat libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
