const ProjectItem = ({ img, title, details, onClick }) => {
  return (
    <div className='relative flex items-center justify-center h-[275px] w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#00145e]'>
      <img
        className='object-cover h-full w-full rounded-xl group-hover:opacity-10'
        src={img}
        alt=''
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='text-center text-white py-3 font-bold'>{details}</p>
        <div className='flex justify-center items-center'>
          <button
            onClick={onClick}
            className='more-info-button rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg px-4 py-2'
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;

// const ProjectItem = ({ img, title, details }) => {
//   return (
//     <div>
//       <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#00145e]'>
//         <img className='rounded-xl group-hover:opacity-10' src={img} alt='' />
//         <div className='hidden group-hover:block  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
//           <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
//             {title}
//           </h3>
//           <p className='text-center text-white py-3 font-bold'>{details}</p>
//           <a className='text-center items-center ' href=''>
//             <button className='text-center  rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>
//               More Info
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProjectItem;
