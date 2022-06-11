import React from 'react';
import { useParams } from 'react-router-dom';


const ProjectDetail = () => {
    const params = useParams();
    return (
        <div>
           <h2> the id: {params.id}</h2> 
        </div>
    );
};

export default ProjectDetail;