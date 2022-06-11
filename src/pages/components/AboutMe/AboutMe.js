import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import img from '../../../images/mypic.png' 
import { Link } from 'react-router-dom';


const AboutMe = () => {
    return (
        <div className='sticky top-24 z-50'>
            <div class="card w-96 bg-primary text-white shadow-xl">
                <figure><img className='rounded-full w-32 h-32' src={img} alt="Dev-Img" /></figure>
                <div className="card-body text-center">
                    <h2 class="card-title">
                        MAHBUB SAJON
                        <div class="badge badge-secondary">Available for Hire!</div>
                    </h2>
                    <p>Hi There! I am a <span className='text-green'>MERN</span> Stack Developer</p>
                    <p className='my-5'><hr /></p>
                   <p className='flex justify-center gap-5'> <FaGithub></FaGithub> <FaLinkedin ></FaLinkedin> <FaTwitter></FaTwitter></p>
                   <p className='my-5'><hr /></p>

                    <p ><span className='text-2xl font-sans font-bold'>Contact Me</span></p>
                    <p ><span className='text-xl font-sans font-bold'>Email:</span> <span className='font-bold font-sans'>sajon.mahbub@gmail.com</span></p>
                    <p ><span className='text-xl font-sans font-bold'>Phone:</span> <span  className='font-bold font-sans'>01921775751</span></p>
                    <p ><span className='text-xl font-sans font-bold'>Address:</span> <span  className='font-bold font-sans'>Mirpur DOHS, Dhaka-1216</span></p>
                    <p className='my-5'><hr /></p>
                    <div class="card-actions justify-end">
                        <div className='btn btn-accent'><a href="https://drive.google.com/drive/folders/1Sj00rFjLAAhUvCuJ7yPzbL5a13wgVV7Z">RESUME</a></div>
                        <div className='btn btn-accent'><Link to='/projects'>PROJECTS</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;