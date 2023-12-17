import linkedin from '../assets/linkedin.png'
import gitp from '../assets/gitp.png'
import whatsapp from '../assets/whatsapp.svg'
import gmail from '../assets/gmail.svg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Footer = () => {
  return (
    <>
      
      <div className="grid items-center justify-center gap-4 pb-5">
        <p className="text-center text-white" data-aos="fade-up">Networks</p>
        
          <div className="flex items-center justify-center gap-6" data-aos="fade-up">

            <Link to='https://github.com/Alessandro1809' target='__blank' className='w-16'><div className='flex items-center justify-center w-16 h-16 text-2xl transition duration-500 rounded-full bg-gradient-to-r from-gray-700 via-slate-600 to-slate-900 mr-52 hover:scale-110 animate-gradient'>
              <img src={gitp} alt="" className='w-8 h-auto' />
            </div></Link>


            <Link to='https://www.linkedin.com/in/alessandrodg/' target='__blank' className='w-16' ><div className='flex items-center justify-center w-16 h-16 text-2xl transition duration-500 rounded-full bg-gradient-to-r from-purple-700 via-blue-400 to-cyan-300 mr-52 hover:scale-110 animate-gradient'>
            <img src={linkedin} alt="" className='w-8 h-auto'/>
            </div></Link>
          </div>
          
          <p className='text-center text-white'>Feel free to write me in:</p>

          <div className="flex items-center justify-center gap-6">

              <Link to='https://wa.link/mxranq' target='__blank' className='w-16'><div className='flex items-center justify-center w-16 h-16 text-2xl transition duration-500 rounded-full bg-gradient-to-r from-green-400 via-green-600 to-green-800 mr-52 hover:scale-110 animate-gradient'>
                <img src={whatsapp} alt="" className='w-8 h-auto' />
              </div></Link>


              <Link to='https://mail.google.com/mail/u/0/#inbox' target='__blank' className='w-16'><div className='flex items-center justify-center w-16 h-16 text-2xl transition duration-500 rounded-full bg-gradient-to-r from-gray-400 via-white to-gray-400 mr-52 hover:scale-110 animate-gradient'>
              <img src={gmail} alt="" className='w-8 h-auto'/>
              </div></Link>
          </div>
      </div>
    </>
  )
}

export default Footer;