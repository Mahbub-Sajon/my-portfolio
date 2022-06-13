import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    useEffect(() => {
        const url = `https://raw.githubusercontent.com/Mahbub-Sajon/project-data/main/data.json`;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                const projects = data.find((data) => data.id == id);
                return setProject(projects);
            })
    }, [id])
    return (
        <div className='text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5 p-5'>
                <img src={project.img1} alt="" />
                <img src={project.img2} alt="" />
                <img src={project.img3} alt="" />
            </div>

            <div className='text-center'> <p className='my-10'> <span className='text-2xl font-bold'>Name:</span> <span className='text-xl'>{project.name}</span></p>
                <p className='mb-5'><span className='text-2xl font-bold'>Description:</span> <span className='text-xl'>{project.description}</span></p>
                <p className='mb-5'><span className='text-2xl font-bold'>Technology Used:</span> <span className='text-xl'>{project.technology}</span></p></div>

            <div className='ml-5 my-10'>
            <a href={project.live} class="btn btn-primary ml-5">Visit Site</a>
            <a href={project.server} class="btn btn-primary ml-5">Server</a>
            <a href={project.client} class="btn btn-primary ml-5">Client</a>
            </div>
        </div>
    );
};

export default ProjectDetail;