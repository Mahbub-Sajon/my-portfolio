import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Banner from '../components/Banner/Banner';
import ContactForm from '../components/ContactForm/ContactForm';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

const Home = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Banner></Banner>
           <div className='flex justify-center gap-10'>
           <div><AboutMe></AboutMe></div>
           <div className='mr-10'>
            <Skills></Skills>
           <Projects></Projects>
           <ContactForm></ContactForm>
           </div>
           </div>
            
        </div>
    );
};

export default Home;