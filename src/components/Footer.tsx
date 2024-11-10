import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='mt-32 py-6'>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Muhammad Nasrullah. All rights reserved.</p>
          <p className="text-sm">
            Built with passion and dedication. Let's connect: 
            <a href="mailto:mnusrullah104@gmail.com" className="text-blue-400hover:text-pink-900 ml-2">
              <MdEmail size={18} className="inline mr-1" />
              mnusrullah104@gmail.com
            </a>
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-pink-700">
            <a href="https://github.com/mnusrullah104" className="hover:text-pink-900" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} className="inline" /> 
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/muhammad-nasrullah-333138274/" className="hover:text-pink-900" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} className="inline" /> 
              LinkedIn
            </a>
            <a href="#contact" className="hover:text-pink-900 ">
              <MdEmail size={20} className="inline" /> 
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
