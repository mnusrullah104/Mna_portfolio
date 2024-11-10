import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center' data-aos="zoom-in-up">
            <div>
                <h2 className='text-4xl md:text-5xl mb-3' >Technologies I work with</h2>
                <p className='text-gray-500 pt-2'> I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. Hy experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl mt-7'>
                    <div className='space-y-2 text-pink-600 '>
                        <h2 data-aos="zoom-in-up">Typescipt</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up"> Next.js</h2>
                    </div>
                    <div className='space-y-2  text-pink-700  list-outside'>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">Css</h2>
                        <h2 data-aos="zoom-in-up"> Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
