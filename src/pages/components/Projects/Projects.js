import React from 'react';
import img1 from '../../../images/agro-tools.png'
import img2 from '../../../images/plant-planet.png'
import img3 from '../../../images/agro-advisor.png'

const Projects = () => {
    return (
       <div>
        <h2 className='text-xl text-center my-7 font-bold'>My Projects</h2>
         <div  className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mb-5'>
           
           <div class="card w-auto bg-base-100 shadow-xl">
               <figure><img src={img1} alt="" /></figure>
               <div class="card-body">
                   <h2 class="card-title">Agro-Tools-Ltd</h2>
                   <p>This is an Agricultural tools manufacturing company's web site ! You can see, order, pay for your products! Several users can use this site to monitor their product. This site is completely safe for users cause others users won't be able to see your activity. You need sign up or sing in to do such activity.</p>
                   <div class="card-actions justify-end">
                       <a href='https://agro-tools-ltd.web.app/' class="btn btn-primary">Visit Site</a>
                   </div>
               </div>
           </div>


           <div class="card w-auto bg-base-100 shadow-xl">
               <figure><img src={img2} alt=''/></figure>
               <div class="card-body">
                   <h2 class="card-title">Plant-Planet</h2>
                   <p>This is an inventory management system! You can stocking, delivering, updating, deleting and adding your products! Several users can use this site to monitor their product. This site is completely safe for users cause others users won't be able to see your activity. You need sign up or sing in to do such activity.</p>
                   <div class="card-actions justify-end">
                       <a href='https://plant-planet-def76.web.app/' class="btn btn-primary">Visit Site</a>
                   </div>
               </div>
           </div>


           <div class="card w-auto bg-base-100 shadow-xl">
               <figure><img src={img3} alt="" /></figure>
               <div class="card-body">
                   <h2 class="card-title">Agro-Advisor</h2>
                   <p>Here You can find the services provide by the advisor. You can see some blog section as well. But you have to log in first to be in the check out page.</p>
                   <div class="card-actions justify-end">
                       <a href='https://agro-advisor.web.app/' class="btn btn-primary">Visit Site</a>
                   </div>
               </div>
           </div>




       </div>
       </div>
    );
};

export default Projects;