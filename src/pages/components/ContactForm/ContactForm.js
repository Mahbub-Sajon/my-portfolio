import React from 'react';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
  function sendEmail (event){
    event.preventDefault();

    emailjs.sendForm('gmail', 'template_91h0olu', event.target, '9cvw77Qg4jaWwnlC2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Successful!')
      event.target.reset()
  }
  return (

    <div className='w-full  bg-base-200  border-2 border-black rounded-md mx-auto my-2'>

      <h1 className='text-3xl text-center font-bold mb-4'>Let Me Know Your Thinking</h1>
      <form onSubmit={sendEmail}>

       
         
          <input  className=' flex rounded w-1/2 h-12 border mx-auto border-black mb-4' placeholder='Your Name' required type="name" name='name' />
     

        
          <input className='flex rounded w-1/2 h-12 border mx-auto border-black mb-4' placeholder='Your Email' required type="email" name='email' />
 


       
         
          <input className=' flex rounded w-1/2 h-12 border mx-auto  border-black mb-4 ' required type="text" placeholder='Subject'  name='subject' />
     


       
         
          <textarea className='flex rounded w-1/2 h-12 border mx-auto border-black mb-4 ' required type="text" placeholder='Your Message'  name='message' />
       

        {/* <p className='text-red-800'>{error}</p> */}

      
       <input className=' grid  w-32 h-12 text-white bg-primary hover:bg-blue-800 rounded-md mb-4 font-bold mx-auto  cursor-pointer' type="submit" />

      

      </form>

    </div>
  );

};

export default ContactForm;