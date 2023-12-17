import { Parallax } from 'react-parallax';
import bg3 from '../assets/bg-proyects.svg'
import zarpe from '../assets/zarpe.webp'
import link from '../assets/link.png'
import git from '../assets/github.png'
import portfolio from '../assets/portfolio.webp'
import pixabay from '../assets/Pixabay.webp'
import recipe from '../assets/Recipe.webp'
import linkedin from '../assets/linkedin.png'
import gitp from '../assets/gitp.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

 const Proyect = () => {
  
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
    
    <Parallax bgImage={bg3} bgImageAlt="Experience" strength={300} blur={1}>
        <body className="w-full h-auto">
        <h2 className='pt-12 mb-12 text-lg text-center text-gray-300 lg:text-2xl md:text-2xl sm:text-xl' data-aos="fade-left">Observe by yourself the projects in which I&apos;ve worked.</h2>
        

          <div className='items-center justify-center p-4 lg:flex lg:gap-6 lg:p-6 md:gap-4 md:p-4 md:flex sm:p-12' data-aos="fade-up">
            
            <div className="lg:w-[600px] h-auto rounded-lg bg-[url('./assets/proyect-card.svg')] bg-cover p-2 transition duration-500 hover:scale-105 md:w-[450px] sm:mb-5 mb-4">
              <div className="grid gap-4 sm:flex lg:flex md:flex ">
              <img src={zarpe} alt="Zarpe Catering" className='lg:w-[380px] lg:h-52 md:w-[240px] md:h-32 sm:w-[380px]' />
                  <div className="flex-col">
                  <h4 className='mb-2 text-lg font-bold text-gray-300 lg:text-xl md:text-xl sm:text-xl'>Zarpe Catering</h4>
                  <p className='text-xs text-gray-200 lg:text-lg md:text-lg sm:text-lg'>Zarpe is a Costa Rican catering service enterprice of high quality.</p>
                  </div>
              </div>
              <div className="flex justify-between mt-4">
                 <Link to='https://github.com/Alessandro1809/Zarpe-proyect' target='__blank'className='transition duration-500 hover:scale-105'> <p className='flex items-center gap-2 text-xs font-semibold text-gray-300 transition-colors lg:text-xl md:text-xl sm:text-xl hover:text-green-400'><img src={git} alt="link image" className='w-5 h-auto lg:w-7 md:w-7 sm:w-7' />Github</p></Link>
                <Link to='https://zarpe.netlify.app/' target='__blank' className='transition duration-500 hover:scale-105'>  <p className='flex items-center gap-2 text-xs font-semibold text-gray-300 transition-colors lg:text-xl md:text-xl sm:text-xl hover:text-green-400'><img src={link} alt="link image" className='w-4 h-auto lg:w-6 md:w-6 sm:w-6 ' />Zarpe web</p></Link>
                   
              </div>
            </div>
            
            <div className="h-auto rounded-lg lg:w-96 md:w-80  bg-[url('./assets/proyect-card.svg')] bg-cover p-2 transition duration-500 hover:scale-105 ">
              <div className="flex-col gap-4">
                <img src={portfolio} alt="Zarpe Catering" className='w-auto h-auto' />
                    <div className="flex-col">
                    <h4 className='mb-2 text-lg font-bold text-gray-300 lg:text-xl md:text-xl sm:text-xl'>Portfolio</h4>
                    <p className='text-xs text-gray-200 lg:text-lg md:text-lg sm:text-lg'>I am always constantly working on my portfolio, keeping your information updated is important, I would gladly appreciate any recommendations.</p>
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <p className='flex items-center gap-2 text-xs font-semibold text-gray-300 lg:text-lg md:text-lg sm:text-lg'><img src={git} alt="link image" className='w-5 h-auto lg:w-7 md:w-7 sm:w-7' />Github</p>
                    <p className='flex items-center gap-2 text-xs font-semibold text-gray-300 lg:text-lg md:text-lg sm:text-lg'><img src={link} alt="link image" className='w-4 h-auto lg:w-6 md:w-6 sm:w-6' />Portfolio</p>
                    
                </div>
              </div>
          </div>
          
          <div className='items-center justify-center p-4 lg:flex lg:gap-6 lg:p-6 md:gap-4 md:p-4 md:flex sm:p-12'data-aos="fade-up">

            <div className="h-auto rounded-lg lg:w-96 md:w-80  bg-[url('./assets/proyect-card.svg')] bg-cover p-2 transitio duration-500 hover:scale-105 sm:mb-5 mb-4">
            <div className="flex-col gap-4">
                <img src={pixabay} alt="Zarpe Catering" className='w-full h-auto' />
                    <div className="flex-col">
                    <h4 className='mb-2 text-lg font-bold text-gray-300 lg:text-lg md:text-lg sm:text-lg'>Image Searcher</h4>
                    <p className='text-xs text-gray-200 lg:text-lg md:text-lg sm:text-lg'>In this project I built a simple interface to test my knowledge regarding API consumption, in this case PIXABAY API, and generating methods.</p>
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <Link to='https://github.com/Alessandro1809/Pixabay-Proyect' tearget='__blank' className='transition duration-500 hover:scale-105'><p className='flex items-center gap-2 text-xs font-semibold text-gray-300 transition-colors lg:text-xl md:text-xl sm:text-xl hover:text-green-400'><img src={git} alt="link image" className='w-5 h-auto lg:w-7 md:w-7 sm:w-7' />Github</p></Link>
                    <Link to='https://creative-duckanoo-b50242.netlify.app/' target='_blank' className='transition duration-500 hover:scale-105'><p className='flex items-center gap-2 text-xs font-semibold text-gray-300 transition-colors lg:text-xl md:text-xl sm:text-xl hover:text-green-400'><img src={link} alt="link image" className='w-4 h-auto lg:w-6 md:w-6 sm:w-6' />Image Searcher</p></Link>
                    
                </div>
              </div>
                
          
            <div className="lg:w-[600px] h-auto rounded-lg bg-[url('./assets/proyect-card.svg')] bg-cover p-2 transition duration-500 hover:scale-105 md:w-[450px] ">  
            
            <div className="grid gap-4 sm:flex lg:flex md:flex" data-aos="fade-up">
              <img src={recipe} alt="Zarpe Catering" className='lg:w-[380px] lg:h-52 md:w-[240px] md:h-32 sm:w-[380px]' />
                  <div className="flex-col">
                  <h4 className='mb-2 text-lg font-bold text-gray-300 lg:text-xl md:text-xl sm:text-xl'>Recipe Catalog</h4>
                  <p className='text-xs text-gray-200 lg:text-lg md:text-lg sm:text-lg'>A functional and easy to use recipe catalog.</p>
                  </div>
              </div>
              <div className="flex justify-between mt-4" >
                 <Link to='https://github.com/Alessandro1809/Recipes-Catalog' target='__blank' className='transition duration-500 hover:scale-105'> <p className='flex items-center gap-2 text-xs font-semibold text-gray-300 transition-colors lg:text-xl md:text-xl sm:text-xl hover:text-green-400'><img src={git} alt="link image" className='w-5 h-auto lg:w-7 md:w-7 sm:w-7' />Github</p></Link>
                 <Link to='https://cool-cat-4430f2.netlify.app/' target='__blank' className='transition duration-500 hover:scale-105'> <p className='flex items-center gap-2 text-xs font-semibold text-gray-300 transition-colors lg:text-xl md:text-xl sm:text-xl hover:text-green-400'><img src={link} alt="link image" className='w-4 h-auto lg:w-6 md:w-6 sm:w-6' />Recipe Catalog</p></Link>
                   
              </div>
            </div>
            
          </div>

            <div className='grid justify-center gap-4 pt-10 lg:pt-10 md:pt-20 sm:pt-20 lg:grid lg:pb-10 md:grid sm:grid'data-aos="fade-up">
              
              <Link to='/gallery' target='__blank' data-aos="fade-up">
                <button className=" button" data-text="Awesome">
                    <span className="actual-text">&nbsp;More&nbsp;Proyects&nbsp;</span>
                    <span aria-hidden="true" className="hover-text">&nbsp;More&nbsp;Proyects&nbsp;</span>
                </button>
              </Link>
           

              <div className="flex items-center justify-center gap-6"data-aos="fade-up">

                <Link to='https://github.com/Alessandro1809' target='__blank' className='w-16'><div className='flex items-center justify-center w-16 h-16 text-2xl transition duration-500 rounded-full bg-gradient-to-r from-gray-700 via-slate-200 to-black mr-52 hover:scale-110 animate-gradient'>
                  <img src={gitp} alt="" className='w-8 h-auto' />
                </div></Link>
                
              
              <Link to='https://www.linkedin.com/in/alessandrodg/' target='__blank' className='w-16'><div className='flex items-center justify-center w-16 h-16 text-2xl transition duration-500 rounded-full bg-gradient-to-r from-gray-700 via-slate-200 to-black mr-52 hover:scale-110 animate-gradient'>
                <img src={linkedin} alt="" className='w-8 h-auto'/>
              </div></Link>
              </div>
            </div>
...
        
        </body>

        </Parallax>
        
    
    </>
  )
}
export default Proyect;