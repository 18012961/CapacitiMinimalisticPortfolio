import React from 'react'
import { projectsData } from './Data';

// const Workitems = ({item}) => {
//   return (
//     <div className='work__card' key={item.id}> 
//     <img src={item.image} alt= '' className='work__img' />
//     <h3 className="work__title">{item.title}</h3>
// <a href="#" className="work__button"> Live Demo
// <i className="bx bx-right-arrow-alt  work__button-icon"></i>
// </a>

// <a href="https://18012961.github.io/simplecity.github.io/" className="work__button"> Live Demo
// <i className="bx bx-right-arrow-alt  work__button-icon"></i>
// </a>
// </div>




//   )
// }

// export default Workitems

const Workitems = ({ item }) => {
  const project = projectsData.find(project => project.id === item.id); // Find the corresponding project data

  return (
    <div className='work__card' key={item.id}> 
      <img src={item.image} alt='' className='work__img'  />
      <h3 className="work__title">{item.title}</h3>
      
      {project && (
        <a href={project.demoLink} className="work__button">Live Demo
          <i className="bx bx-right-arrow-alt  work__button-icon"></i>
        </a>
      )}
    </div>
  );
}

export default Workitems;