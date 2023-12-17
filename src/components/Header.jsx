
import { Link } from "react-scroll";
const Header = () => {
  return (
    <>
          
   
        <div className="flex justify-center gap-3 p-6 font-mono text-xs text-white bg-black lg:gap-28 lg:text-2xl z-5 md:text-2xl sm:text-2xl md:gap-20 sm:gap-10">
        <Link activeClass="active" className="transition duration-500 cursor-pointer hover:scale-110" to="welcome" spy={true} smooth={true} duration={500} >Meet me</Link>
        <Link activeClass="active" className="transition duration-500 cursor-pointer hover:scale-110" to="experience" spy={true} smooth={true} duration={800} >Experience</Link>
        <Link activeClass="active" className="transition duration-500 cursor-pointer hover:scale-110" to="proyects" spy={true} smooth={true} duration={1000} >Proyects</Link>
        <Link activeClass="active" className="transition duration-500 cursor-pointer hover:scale-110" to="contact" spy={true} smooth={true} duration={1100} >Contact</Link>
        </div>
       
    </>
  )
}
export default Header;
