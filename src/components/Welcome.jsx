import img from '../assets/presentacion.jpeg'
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import bg from '../assets/bg-welcome.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
 const Welcome = () => {
  return (
   <>
   
   <Parallax className='w-full home' bgImage={bg} bgImageAlt="Welcome" strength={400} >
   
        
        <div id='welcome' className='flex items-center justify-center pb-6 lg:pt-20 lg:gap-20 md:gap-6 md:pt-32 sm:pt-10'data-aos="fade-up">
            <motion.div className='flex-col hidden flex-start lg:block md:block sm:hidden'>
                <p className='font-semibold text-transparent lg:text-3xl lg:pl-12 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text md:pl-6 md:text-lg'data-aos="fade-up">I&apos;m passionate to web development</p>
                <p className='text-gray-300 lg:text-lg lg:pl-12 md:pl-6'>Development of dynamic and attractive user interfaces</p>
            </motion.div>
            
          <div className="flex-col items-center justify-center">
          <div className="flex justify-center">
          <motion.img src={img} alt="presentation image" className='lg:w-[500px] md:w-[500px] sm:w-[300px] h-auto rounded-full w-[200px]' whileTap={{ scale: 0.9 }} />
          
            </div>
          <h2 className="mt-3 text-xl text-center text-white lg:text-3xl md:text-xl sm:text-2xl">Alessandro Diaz</h2>
          <div className='flex justify-center'>
          <motion.h1 className="mt-4 mb-4 text-lg font-semibold text-green-400 lg:text-xl md:text-xl sm:text-xl typing" whileHover={{ scale: 1.1 }} drag
        dragConstraints={{
          top: -1,
          left: -10,
          right: 10,
          bottom: 1,
        }}>Software developer</motion.h1>
            
          </div>
          <div className='flex justify-center pb-10 lg:pb-20 md:pb-20 sm:pb-10' data-aos="fade-up">
              <a href='/RESUME.pdf' download> <button className="btn-17">
                <span className=" text-container">
                    <span className="text">Download my CV</span>
                </span>
            </button></a>

            </div>

            <motion.div className='flex-col p-2 pb-4 text-center lg:hidden md:hidden sm:block sm:pb-10'>
                        <p className='text-xl font-semibold text-transparent lg:text-2xl lg:pl-12 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text md:pl-6 md:text-lg sm:text-2xl'>I&apos;m passionate to web development</p>
                        <p className='text-sm text-gray-300 lg:text-lg lg:pl-12 md:pl-6 md:text-lg sm:text-lg'>Development of dynamic and attractive user interfaces</p>
            </motion.div>

            <motion.div className='flex-col justify-center p-2 text-center lg:hidden md:hidden sm:block sm:pb-10' data-aos="fade-up">
                <p className='text-lg font-semibold text-transparent lg:text-xl lg:pr-12 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text md:pr-6 md:text-lg sm:text-2xl'>HTML, CSS and JavaScript, and the React</p>
                <p className='text-sm text-gray-300 lg:pt-5 lg:text-lg lg:pr-12 md:pr-6 md:text-lg sm:text-lg md:pt-5 sm:pt-5'>This are the key to creating dynamicand user friendly interfaces.<br></br>
                Do you want that in your web or app? Go ahead contact me!</p>
            </motion.div>
          </div>
            
            <motion.div className='flex-col hidden flex-end lg:block md:block sm:hidden' data-aos="fade-up" >
                <p className='font-semibold text-justify text-transparent lg:text-xl lg:pr-12 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text md:pr-6 md:text-lg'>A solid command of HTML, CSS and JavaScript, and the React</p>
                <p className='pt-5 ml-10 text-justify text-gray-300 lg:text-lg lg:pr-12 md:pr-6'>This are the key to creating dynamicand user friendly interfaces.<br></br>
                Do you want that in your web or app? Go ahead contact me!</p>
            </motion.div>
        </div>

        
   
    </Parallax>
    
    
   </>
  )
}

export default Welcome;