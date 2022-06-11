import React from 'react';
import useProjects from '../../../hooks/useProjects'
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useProjects()
    return (
       <div>
        <h2 className='text-xl text-center my-7 font-bold'>My Projects</h2>
         <div  className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mb-5'>
           
           
            {
                projects.map(project => <Project
                key={project.id}
                project={project}
                ></Project>)
            }

           


          




       </div>
       </div>
    );
};

export default Projects;