import WorkItem from './WorkItem';

const data = [
  {
    date: 'Aug 2023-Current',
    title: 'Teaching Assistant | University of Utah',
    location: 'Salt Lake City, Utah',
    details:
      'I effectively supported the instruction of CS 3500\n\n Software Practices 1 as a teaching assistant, guiding students through key programming concepts, debugging techniques, and software development best practices. Collaborated with the instructor to facilitate engaging discussions, provide personalized assistance during office hours, and evaluate assignments, fostering a dynamic learning environment for aspiring computer scientists.',
  },
  {
    date: 'Jun 2023-Aug 2023',
    title: 'Consultation Agent | Geek Squad',
    location: 'Murray, Utah',
    details:
      'Provided exceptional customer service as the first point of contact for individuals seeking technology support and solutions. Utilized expertise in consumer electronics, collaborated with team members, and effectively communicated to assist customers with device setup, repairs, and addressing technical issues. Created a supportive and positive environment, ensuring timely and accurate service during check-in, checkout, and throughout the customer journey.',
  },
  {
    date: 'Dec 2022-Jun 2023',
    title: 'Undergraduate Research Assistant | University of Utah',
    location: 'Salt Lake City, Utah',
    details:
      'Researched new Natural Language Processing (NLP) techniques with tools like ChatGPT specifically with converting chart question answers to natural language inferences. Used Python and libraries like Pandas to process and clean data.',
  },
  {
    date: 'Nov 2018-Mar 2021',
    title: 'Youth Sports Official | Salt Lake County',
    location: 'Salt Lake City, Utah',
    details:
      'I was a referee here for youth sports. Specifically the Jr. Jazz program which is an organized youth basketball program. Had to oversee and manage a large group of people in doing this job. Required management as well as collaborative skills in working together to officiate each game.',
  },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='mb-4 text-4xl font-bold text-center text-[#001b5e]'>
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          date={item.date}
          title={item.title}
          location={item.location}
          details={item.details}
        />
      ))}
    </div>
  );
};
export default Work;
