import emailjs from '@emailjs/browser';

const emailSend =(mail)=>{

    try {
        emailjs.send(`${import.meta.env.VITE_EMAIL_SERVICE_ID}`,`${import.meta.env.VITE_EMAIL_TEMPLATE}`,{
            user_name: mail.name,
            message: mail.message,
            user_email: mail.email,
            user_subject:'Propuesta de negocios'
            },`${import.meta.env.VITE_SERVICE_PUBLIC_PASS}`);
    } catch (error) {
        console.log(error.message);
    }
}

export default emailSend;