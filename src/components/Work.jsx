import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: '2021',
    title: 'Fullstack Developer',
    duration: '3 years',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consequatur nam perspiciatis repellat magni quos!',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    duration: '1 years',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consequatur nam perspiciatis repellat magni quos!',
  },
  {
    year: '2018',
    title: 'Backend Developer',
    duration: '2 years',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consequatur nam perspiciatis repellat magni quos!',
  },
  {
    year: '2017',
    title: 'Software Engineer',
    duration: '2 years',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consequatur nam perspiciatis repellat magni quos!',
  },
]

const Work = () => {
    return (
      <div id='work' className='max-x-[1040] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] '>Work</h1>
        {data.map((item, idx) => (
          <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details} 
          />
        
        ))}
      </div>
    );
}

export default Work;
