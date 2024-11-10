import React from 'react';
import Image from 'next/image';

interface propsType {
  title: string;
  desc: string;
  image: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, image, tags }) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]' data-aos="zoom-in-up">
      <div>
        <Image
          className='w-full h-[200px] object-cover' // Uniform height for all images
          src={image}
          width={350}
          height={200} // Change height to make it uniform
          alt={title}
        />
      </div>

      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        
        <div className='flex flex-wrap gap-2'> {/* Use flexbox for better tag alignment */}
          {tags.map((tag, index) => (
            <span key={index} className='tags'>{tag}</span> // Apply the tags styling
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
