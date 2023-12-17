import { Parallax } from 'react-parallax';
import { motion, spring} from 'framer-motion';
import bg2 from '../assets/bg-experience.svg'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Experience = () => {
const [isOpen,setIsOpen]= useState(false);

const Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
     
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  return (
   <>
        <Parallax bgImage={bg2} bgImageAlt="Experience" strength={300} blur={1}>
            
            <motion.body transition={{layout:{ duration:1}}} layout className="relative w-full h-100vh" >
                <div data-aos="fade-up">
                <motion.div layout className='items-center justify-center p-2 pb-4 lg:pt-26 lg:flex lg:gap-12 md:p-4 sm:p-4 md:flex sm:flex lg: md:pb-4 sm:pb-4 md:pt-26 sm:pt-14 pt-14'initial="offscreen" whileInView="onscreen"viewport={{ once: true, amount: 0.8 }}>
                    
                    <motion.div layout transition={{layout:{ duration:0.5,type:spring}}} onClick={()=> setIsOpen(!isOpen)} className='rounded-lg lg:w-[460px] md:w-[460px] sm:w-[460px] bg-gradient-to-t from-gray-800 to-black mb-12' variants={Variants} >
                        <motion.p layout='position' className='p-2 font-bold text-center text-gray-400 lg:text-4xl hover:cursor-pointer md:text-3xl sm:text-2xl' >Read more about me...</motion.p>
                    {isOpen &&
                        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='p-4 text-lg text-justify text-gray-300' data-aos="fade-up">I&apos;m a developer with fundamental skills in HTML, CSS and JavaScript, with a strong command of components, their state and their life cycle. Furthermore, I am able to create responsive layouts using Flexbox and Grid, integrate external APIs, collaborate effectively using version control tools, and keep learning in a constantly changing environment.</motion.p>}
                    </motion.div>
                    
                    <motion.div  className='rounded-lg lg:w-72 md:w-72 sm:w-72' data-aos="fade-up" whileHover={{scale:1}} transition={{duraion:2}}>
                    <motion.p  layout='position' className='p-2 text-2xl font-semibold text-center text-gray-400 rounded-md' data-aos="fade-up">Over the Years</motion.p>
                    <motion.p layout='position' className='p-4 pb-4 text-lg text-justify text-gray-300 ' data-aos="fade-up">From 2020 to the present, I build apps with important functionalities and algorithmic complexity. I was and still am very self-taught, so I strive to always learn something new and constantly take on development challenges. 
                    </motion.p>
                    </motion.div>
                  
                </motion.div>
                </div>
                
                <motion.div initial="offscreen" whileInView="onscreen"viewport={{ once: true, amount: 0.8 }}>
                <motion.h1 layout className='pt-20 pb-12 text-6xl font-bold text-center text-gray-200' drag
                    dragConstraints={{
                    top: -1,
                    left: -10,
                    right: 10,
                    bottom: 1,
                    }} variants={Variants}><div className="loader">
                            <span>SKILLS</span>
                            <span>SKILLS</span>
                        </div>
                    </motion.h1>
                    </motion.div>
                <motion.div initial="offscreen" whileInView="onscreen"viewport={{ once: true, amount: 0.2 }}>
                <motion.div layout className='p-4 pb-12 lg:justify-center lg:items-center lg:flex lg:p-4 lg:gap-4 pt-14 lg:w-auto md:pl-40 md:pr-40 sm:pl-28 sm:pr-28'  variants={Variants}>
            
                <div className="p-1 mb-4 overflow-hidden transition duration-500 shadow-xl md:mb-4 lg:w-64 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl animate-gradient hover:scale-110 lg:h-auto sm:mb-4" data-aos="fade-up">
                    <div  className=" p-0.2 rounded-xl" data-aos="fade-up">
                        <div  className="p-0.5 bg-black bg-opacity-20 rounded-xl" data-aos="fade-up">
                            <p className="mb-4 text-xl font-bold text-center text-white" >REACT</p>
                            <p className="text-justify text-white text-opacity-70">JavaScript library for building user interfaces, reusable components that facilitates the development of complex and dynamic web applications.</p>
                        </div >
                    </div >
                </div >
                  
                
                <div  className="p-1 mb-4 overflow-hidden transition duration-500 shadow-xl lg:w-64 bg-gradient-to-r from-yellow-300 via-green-500 to-blue-500 rounded-xl animate-gradient hover:scale-110 lg:h-auto md:mb-4 sm:mb-4" data-aos="fade-up">
                    <div  className=" p-0.2 rounded-xl"  data-aos="fade-up">
                        <div  className="p-0.5 bg-black bg-opacity-20 rounded-xl" data-aos="fade-up">
                            <p className="mb-4 text-xl font-bold text-center text-white">JAVASCRIPT</p>
                            <p className="text-justify text-white text-opacity-70">Interpreted programming language, allows adding interactivity and dynamism to web pages, being used both on the client and server.</p>
                        </div >
                    </div >
                </div >

                
                <div  className="p-1 mb-4 overflow-hidden transition duration-500 shadow-xl lg:w-64 bg-gradient-to-r from-green-300 via-yellow-500 to-rose-500 rounded-xl animate-gradient hover:scale-110 lg:h-auto md:mb-4 sm:mb-4" data-aos="fade-up">
                    <div  className=" p-0.2 rounded-xl" data-aos="fade-up">
                        <div  className="p-0.5 bg-black bg-opacity-20 rounded-xl" data-aos="fade-up">
                            <p className="mb-4 text-xl font-bold text-center text-white">NODE.JS</p>
                            <p className="text-justify text-white text-opacity-70">Execution environment for JavaScript on the server, based on the Google Chrome V8 engine, for developing scalable and efficient applications.</p>
                        </div >
                    </div >
                </div >

                <div  className="p-1 mb-4 overflow-hidden transition duration-500 shadow-xl lg:w-64 bg-gradient-to-r from-green-400 via-cyan-500 to-rose-500 rounded-xl animate-gradient hover:scale-110 lg:h-auto md:mb-4 sm:mb-4" data-aos="fade-up">
                    <div  className=" p-0.2 rounded-xl" data-aos="fade-up">
                        <div  className="p-0.5 bg-black bg-opacity-20 rounded-xl" data-aos="fade-up">
                            <p className="mb-4 text-xl font-bold text-center text-white">MONGO DB</p>
                            <p className="text-justify text-white text-opacity-70">Is a document-oriented NoSQL database that offers high scalability and flexibility, ideal for storing large amounts of unstructured data and aplications.</p>
                        </div >
                    </div >
                </div >

                
                <div  className="p-1 mb-4 overflow-hidden transition duration-500 shadow-xl lg:w-64 bg-gradient-to-r from-yellow-200 via-yellow-500 to-green-500 rounded-xl animate-gradient hover:scale-110 lg:h-auto " data-aos="fade-up">
                    <div  className=" p-0.2 rounded-xl"data-aos="fade-up">
                        <div  className="p-0.5 bg-black bg-opacity-20 rounded-xl" data-aos="fade-up">
                            <p className="mb-4 text-xl font-bold text-center text-white">EXPRESS.JS</p>
                            <p className="text-justify text-white text-opacity-70">It is a minimalist and flexible framework for Node.js, provides a robust set of features for developing web and mobile applications, simple creating APIs.</p>
                        </div >
                    </div >
                </div >
                    
                
                </motion.div>
                </motion.div>
                <motion.div layout className='flex items-center justify-center gap-20 p-4 pt-10 pb-12' data-aos="fade-up">
                    
                <div className="text-xs uppercase p-7 card lg:uppercase md:uppercase sm:uppercase" data-aos="fade-up">
                    <p><span>MySQL</span></p>
                    <p><span>C#</span></p>
                    <p><span>php</span></p>
                    <p><span>Bootstrap</span></p>
                    <p><span>TailWind</span></p>
                    <p><span>HTML5</span></p>
                    <p><span>CSS3</span></p>
                    <p><span>JAVA</span></p>
                </div>
                    
                
                </motion.div>
                
                
            </motion.body>
           
        </Parallax>
   </>
  )
}

export default Experience;