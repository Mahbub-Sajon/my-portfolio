import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Banner from '../components/Banner/Banner';
import ContactForm from '../components/ContactForm/ContactForm';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

const Home = () => {
    return (
        <div>
            
          
            <Banner></Banner>
           <div className='grid lg:grid-cols-2 '>
           <div className='lg:ml-24 sm:w-full lg:w-1/2'><AboutMe></AboutMe></div>
           <div className='lg:mr-24 '>
            <Skills></Skills>
           <Projects></Projects>
           <ContactForm></ContactForm>
           </div>
           </div>
            
        </div>
    );
};

export default Home;