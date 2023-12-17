import { useState } from "react";
import { Parallax } from "react-parallax";
import bg from '../assets/bg-contact.svg';
import emailSend from "../helpers/EmailSend";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {


  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

 

   const handleSubmit = (e) => {
     e.preventDefault();
     if ([name,email,message].includes('')) {
      alert('All fields are required');
      return;
    }
     emailSend({name,email,message});

     setName(''); 
     setEmail('');
     setMessage('');
  
   alert('Email sent successfully')
   };

  return (
   <>
   <Parallax className='h-auto' bgImage={bg} bgImageAlt="Welcome" strength={600}>
   
    <div className="flex flex-col items-center justify-center p-1 pt-20 pb-6" data-aos="fade-up" >
      <p className="mb-8 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-orange-500 via-yellow-300 to-purple-500 animate-gradient bg-clip-text"data-aos="fade-up">Let&apos;s do amazing things together!</p>
      <p className="mb-2 text-2xl font-semibold text-center text-white"data-aos="fade-up">Got a question or proposal, or just want to say hello? Go ahead.</p>      
    </div>
    

    <div className="flex justify-center mb-16"data-aos="fade-up">
    <form className="p-6 mb-1 lg:w-2/4 md:w-4/5 sm:w-full" onSubmit={handleSubmit} >
      <div className="flex gap-4">
    <div className="w-full mb-5 ">
            <label htmlFor="name"
            className="text-xs font-semibold text-white uppercase lg:font-bold lg:text-lg md:text-lg sm:text-lg"
            >Name:</label>
            <input 
            id="name"
            name="user_name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 mt-2 text-white placeholder-white bg-black border-2 rounded-md placeholder:text-xs lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-lg "
            value={name}
            onChange={e=>setName(e.target.value)}
            
            />
        </div>
        <div className="w-full mb-5 ">
            <label htmlFor="Email"
            className="text-xs font-semibold text-white uppercase lg:font-bold lg:text-lg md:text-lg sm:text-lg"
            >Email address:</label>
            <input 
            id="subject"
            name="user_email"
            type="text"
            placeholder="Enter your mail address"
            className="w-full p-2 mt-2 text-white placeholder-white bg-black border-2 rounded-md placeholder:text-xs lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-lg"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
        </div>
        </div>
        <div className="w-full mb-5 ">
            <label htmlFor="message"
            className="text-xs font-semibold text-white uppercase lg:font-bold lg:text-lg md:text-lg sm:text-lg"
            >message:</label>
            <textarea 
            id="message"
            name="message"
            type="text"
            placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            className="w-full h-20 p-2 mt-2 text-white placeholder-white bg-black border-2 rounded-md resize-none lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-lg placeholder:text-xs"
            value={message}
            onChange={e=>setMessage(e.target.value)}
            />
        </div>

        <input type="submit"
        value='Send'
        className="w-full p-3 text-xl font-bold text-center text-black uppercase transition-colors rounded-md shadow-sm cursor-pointer hover:bg-red-600 bg-gradient-to-r from-green-400 via-rose-500 to-indigo-600 animate-gradient" ></input>
    </form>
    
    </div>
    </Parallax>
    
   </>
  )
}
export default Contact;
