import { motion } from "framer-motion";
import Welcome from "../components/Welcome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Proyect from "../components/Proyect";
import Contact from "../components/Contact";
import exp from '../assets/experience.png'
import proy from '../assets/proyectos.png'
import aten from '../assets/atens.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
 const PrincipalPage = () => {
  return (
   <>
   <main className="bg-black ">
    <Header/>
 
    
    <Welcome/>

    <div className="flex flex-col items-center justify-center w-full h-84 bg-gradient-to-b from-gray-800 to-black" data-aos="fade-up">
            <motion.img src={exp} alt="" className='w-64 h-auto ' />
            <h2 id='experience' className="mb-8 text-5xl font-semibold text-center text-transparent bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text animate-gradient">Experience</h2>
    </div>
    <Experience/>
    <div className="flex flex-col items-center justify-center w-full h-84 bg-gradient-to-b from-gray-800 to-black" data-aos="fade-up">
            <img src={proy} alt="" className='w-64 h-auto ' />
            <h1 id='proyects' className="mb-8 text-5xl font-semibold text-center text-transparent bg-gradient-to-r from-yellow-500 via-blue-500 to-green-400 bg-clip-text animate-gradient">Proyects</h1>
    </div>  
    <Proyect/>
    
    <div className="flex flex-col items-center justify-center w-full h-84 bg-gradient-to-b from-gray-800 to-black" data-aos="fade-up">
            <img src={aten} alt="" className='w-64 h-auto ' />
            <h1 id='contact' className="mb-8 text-5xl font-semibold text-center text-transparent bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text animate-gradient">Contact</h1>
    </div> 
    <Contact/>
    <Footer/>
    </main>
    </>
   
  )
}

export default PrincipalPage;
