import React from 'react';
import Banner from '../components/Banner/Banner';
import ContactForm from '../components/ContactForm/ContactForm';
import Naveber from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';

const Home = () => {
    return (
        <div>
            
            <Naveber></Naveber>
            <Banner></Banner>
            <Projects></Projects>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;