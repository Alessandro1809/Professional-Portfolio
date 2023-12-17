import APV from '../assets/projects/APV.png'
import CarS from '../assets/projects/CarSearch.png'
import Clients from '../assets/projects/ClientCRM.png'
import Crypto from '../assets/projects/Crypto.png'
import imageSearch from '../assets/projects/ImageSearch.png'
import presupuesto from '../assets/projects/Presupuesto.png'
import Recipes from '../assets/projects/RecipeSearch.png'
import GiffExpert from '../assets/projects/GiffExpert.png'
import back from '../assets/back.png'
 import { Link } from "react-router-dom";
 
 const Galery = () => {
  return (
    <>
    <div className="bg-black bg-[url('./assets/bg-gallery.svg')]  ">
      
      <div className='mt-12 ml-16'>
      <Link to='/'>
        <button className='transition duration-500 rounded-full shadow-lg shadow-black hover:scale-110'>
          <img src={back} alt="Go back" className='w-10' />
        </button>
      </Link>
      </div>
      
    <div className="flex items-center justify-center mt-12">
    <h1 className="mb-12 font-bold text-center underline text-violet-400 sm:animate-bounce animate-bounce lg:animate-none md:animate-none" data-aos="fade-right"><div className="Proyects">
            <span className='text-5xl'>WORKS</span>
            <span className='text-5xl'>WORKS</span>
        </div></h1>
    </div>
      
  
    <div className="flex items-center justify-center "data-aos="fade-right">
    
     <div className="grid justify-between grid-cols-1 gap-5 p-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:p-4"data-aos="fade-right">
        
         <div className="h-auto p-2 rounded-lg bg-slate-200 lg:w-80 lg:h-auto md:w-80 md:h-auto sm:w-96 sm:h-auto w-60">
            <div className="w-full h-32 rounded-lg lg:w-auto md:w-auto sm:w-full lg:h-44 md-h-44 sm:h-44">
              <img src={GiffExpert} alt="GFEXP" className='w-auto h-full ' />
            </div>
            <p className="p-2 text-black">Description: A Giff search page with the service from Giphy for developers API.</p>
            <Link to='https://giffexpertapp-react.netlify.app'><p className="p-2 text-black">Visit the site: <span className="p-2 text-black hover:text-red-500"> click me to see GiffExpert.app</span></p></Link>
        </div>
        
        <div className="h-auto p-2 rounded-lg bg-slate-200 lg:w-80 lg:h-auto md:w-80 md:h-auto sm:w-96 sm:h-auto w-60">
            <div className="w-full h-32 rounded-lg lg:w-auto md:w-auto sm:w-full lg:h-44 md-h-44 sm:h-44">
              <img src={APV} alt="APV" className='w-auto h-full ' />
            </div>
            <p className="p-2 text-black">Description: An appointment manager for a veterinary with a functional and practical CRUD</p>
            <Link to='https://cute-churros-86af32.netlify.app'><p className="p-2 text-black">Visit the site: <span className="p-2 text-black hover:text-red-500"> click me to see APV.app</span></p></Link>
        </div>

          <div className="h-auto p-3 rounded-lg bg-slate-200 lg:w-80 lg:h-auto md:w-80 md:h-auto sm:w-96 sm:h-auto w-60"data-aos="fade-right">
            <div className="w-full h-32 rounded-lg lg:w-auto md:w-auto sm:w-full lg:h-44 md-h-44 sm:h-44">
            <img src={CarS} alt="APV" className='w-auto h-full' />
            </div>
            <p className="p-2 text-black">Description: This project filters the search for a vehicle  based on different conditions in real time</p>
            <Link to='https://chic-crumble-44c27d.netlify.app'><p className="p-2 text-black">Visit the site: <span className="p-2 text-black hover:text-red-500"> click me to see VahicleSearch.app</span></p></Link>
          </div>

          <div className="h-auto p-3 rounded-lg bg-slate-200 lg:w-80 lg:h-auto md:w-80 md:h-auto sm:w-96 sm:h-auto w-60"data-aos="fade-right">
            <div className="w-full h-32 rounded-lg lg:w-auto md:w-auto sm:w-full lg:h-44 md-h-44 sm:h-44">
              <img src={Clients} alt="APV" className='w-auto h-full' />
            </div>
            <p className="p-2 text-black">Description: This site is a small CRM to manage clients, with a functional CRUD, built with Indexed-DB</p>
            <Link to='https://dainty-youtiao-4a987a.netlify.app'><p className="p-2 text-black">Visit the site: <span className="p-2 text-black hover:text-red-500"> click me to see ClientCRM.app</span></p></Link>
          </div>

          <div className="h-auto p-3 rounded-lg bg-slate-200 lg:w-80 lg:h-auto md:w-80 md:h-auto sm:w-96 sm:h-auto w-60"data-aos="fade-right">
            <div className="w-full h-32 rounded-lg lg:w-auto md:w-auto sm:w-full lg:h-44 md-h-44 sm:h-44">
            <img src={Crypto} alt="APV" className='w-auto h-full' />
            </div>
            <p className="p-2 text-black">Description: This project is a cryptocurrency quote with a simple and friendly design, consuming a Crypto API</p>
            <Link to='https://roaring-hotteok-f7cd0f.netlify.app'><p className="p-2 text-black">Visit the site: <span className="p-2 text-black hover:text-red-500"> click me to see CryptoAnalize.app</span></p></Link>
          </div>

          <div className="h-auto p-3 rounded-lg bg-slate-200 lg:w-80 lg:h-auto md:w-80 md:h-auto sm:w-96 sm:h-auto w-60"data-aos="fade-right">
            <div className="w-full h-32 rounded-lg lg:w-auto md:w-auto sm:w-full lg:h-44 md-h-44 sm:h-44">
            <img src={imageSearch} alt="APV" className='w-auto h-full' />
            </div>
            <p className="p-2 text-black">Description: This site is an image search engine, consuming PIXABAY API services and generator methods to create a pagination in the app.</p>
            <Link to='https://creative-duckanoo-b50242.netlify.app'><p className="p-2 text-black">Visit the site: <span className="p-2 text-black hover:text-red-500"> click me to see ImageSearch.app</span></p></Link>
          </div>

          <div className="h-auto p-3 rounded-lg bg-slate-200 lg:w-80 lg:h-auto md:w-80 md:h-auto sm:w-96 sm:h-auto w-60"data-aos="fade-right">
            <div className="w-full h-32 rounded-lg lg:w-auto md:w-auto sm:w-full lg:h-44 md-h-44 sm:h-44">
            <img src={presupuesto} alt="APV" className='w-auto h-full' />
            </div>
            <p className="p-2 text-black">Description: This app is a budget calculator that takes into account the expenses that a person has, with expense warnings and budget updates in real time.</p>
            <Link to='https://lively-cascaron-b9be22.netlify.app'><p className="p-2 text-black">Visit the site: <span className="p-2 text-black hover:text-red-500"> click me to see 
            BudgetCalc.app</span></p></Link>
          </div>

          <div className="h-auto p-3 rounded-lg bg-slate-200 lg:w-80 lg:h-auto md:w-80 md:h-auto sm:w-96 sm:h-auto w-60"data-aos="fade-right">
            <div className="w-full h-32 rounded-lg lg:w-auto md:w-auto sm:w-full lg:h-44 md-h-44 sm:h-44">
            <img src={Recipes} alt="APV" className='w-auto h-full' />
            </div>
            <p className="p-2 text-black">Description: This catalog of recipes allows you to search for recipes, see their preparation and general information, consuming a public recipe API, with functionality to save and delete from favorites</p>
            <Link to='https://cool-cat-4430f2.netlify.app'><p className="p-2 text-black">Visit the site: <span className="p-2 text-black hover:text-red-500"> click me to see 
            RecipeCatalog.app</span></p></Link>
          </div>
        </div>
     </div>
     </div>
    </>
  )
}
export default Galery;