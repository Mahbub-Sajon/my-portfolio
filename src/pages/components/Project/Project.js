import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";



const Project = (props) => {
    const { name, img1, img2, img3, description, live, client, server, id } = props.project;

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <div>
            <div data-aos-easing="ease-in-sine" data-aos="zoom-in-right" class="card w-auto bg-primary text-white shadow-xl">
                <figure><img src={img1} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>Click on the detail button to explore more! </p>
                    <div class=" card-actions">

                        <Link className='  btn btn-neutral' to={`project-detail/${id}`}>Detail</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;