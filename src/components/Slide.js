import React from 'react' 
import s1 from '../images/images/slide-1.jpg' 
import s2 from '../images/images/slide-2.jpg' 
import s3 from '../images/images/slide-3.jpg' 

function Slide() { 
  return ( 
    <> 
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"> 
  <div className="carousel-inner"> 
    <div className="carousel-item active"> 
      <img src={s1} className="d-block w-100" alt="..." /> 
    </div> 
    <div className="carousel-item"> 
      <img src={s2} className="d-block w-100" alt="..." /> 
    </div> 
    <div className="carousel-item"> 
      <img src={s3} className="d-block w-100" alt="..." /> 
    </div> 
  </div> 
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"> 
    <span className="carousel-control-prev-icon" aria-hidden="true" /> 
    <span className="visually-hidden">Previous</span> 
  </button> 
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"> 
    <span className="carousel-control-next-icon" aria-hidden="true" /> 
    <span className="visually-hidden">Next</span> 
  </button> 
</div> 
 
    </> 
  ) 
} 
 
export default Slide