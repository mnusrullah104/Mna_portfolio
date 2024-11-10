import React from 'react';
import { MdDownload } from 'react-icons/md'; // Importing download icon

const About = () => {
  const handleDownload = () => {
    // You can specify the path to your resume PDF file here
    const link = document.createElement('a');
    link.href = '/Muhammad Nasrullah.pdf'; // Replace with the actual path to your PDF
    link.download = 'Muhammad_Nasrullah_Resume.pdf'; // This will be the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='about' className='container pt-32'>
      <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">About Me</h2>
      <p className='text-gray-500 pt-4' data-aos="zoom-in-up">
        I am Muhammad Nasrullah, a dedicated student at the Governor of Sindh's IT Initiative for AI and Web 3.0 (GIAIC).
        <br />
        Currently, I am pursuing an exciting course in Artificial Intelligence, Web 3.0, and the Metaverse. My passion for
        <br />
        technology drives me to constantly learn new skills and stay updated with the latest innovations in the ever-evolving
        <br />
        digital landscape.
      </p>
      <p className='text-gray-500 pt-4'>
        With a strong foundation in web development and graphic design, I thrive on transforming ideas into reality.
        <br />
        I enjoy tackling challenges and exploring new technologies that enhance user experiences. I am committed
        <br />
        to contributing to the future of technology and excited about the opportunities that lie ahead.
      </p>
      <div className='pt-6'>
        <button
          onClick={handleDownload}
          className='flex items-center bg-pink-700 text-white px-4 py-2 rounded hover:bg-pink-400'
        >
          <MdDownload className='mr-2' /> Download Resume
        </button>
      </div>
    </div>
  );
}

export default About;
