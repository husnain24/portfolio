const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
      <form
        action='https://getform.io/f/dba20c4a-607f-4a3c-b105-cd4bd0c935ca'
        method='POST'
        encType='multipart/form-data'
      >
        <div className='grid md:grid-cols-2 gap-2 py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input
              required
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='name'
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='phone'
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input
            required
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            name='email'
            id=''
          />
        </div>
        <div className='flex flex-col  py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input
            required
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='subject'
            id=''
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea
            required
            className='border-2 rounded-lg p-3 flex border-gray-300'
            rows={10}
            name='message'
            id=''
          />
          <div className='flex align-bottom justify-center mt-3'>
            <button className='w-full h-[50%] rounded-lg bg-gray-700 text-white font-bold cursor-pointer text-lg px-4 py-2'>
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
