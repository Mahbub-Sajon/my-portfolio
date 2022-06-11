import React from 'react';

const Project = (props) => {
    const {name, img1, img2, img3, description, live, client, server} = props.project;
    return (
        <div>
            <div class="card w-auto bg-base-100 shadow-xl">
               <figure><img src={img1} alt="" /></figure>
               <div class="card-body">
                   <h2 class="card-title">{name}</h2>
                   <p>Description: {description}</p>
                   <div class="card-actions justify-end">
                       <a href={live} class="btn btn-primary">Visit Site</a>
                       <a href={server} class="btn btn-primary">Server</a>
                       <a href={client} class="btn btn-primary">Client</a>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Project;