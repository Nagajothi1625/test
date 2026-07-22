import React from 'react';
import '../Navbar/Navbar.css';
//port Images from './images';

const   Carousel = () => {
  return (
    <div>
      <section>

        <div className='slider-container'>

        <div id="carouselSlides" class="carousel slide" data-ride="carousel">

           
     < div class="carousel-inner">
        <div className="carousel-item active">
                <img src="https://meenakshibhavan.in/images/gallery-02.jpg"class="d-block w-100" alt="..."/>
                 
        </div>
          <div class="carousel-item  ">
                <img src="https://meenakshibhavan.in/images/gallery-01.jpg" class="d-block w-100" alt="..."/>
        </div>
         
          <div class="carousel-item  ">
                <img src="https://meenakshibhavan.in/images/gallery-06.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item  ">
                <img src="https://meenakshibhavan.in/images/gallery-03.jpg" class="d-block w-100" alt="..."/>        </div>
         <div class="carousel-item  ">
                <img src="https://meenakshibhavan.in/images/gallery-05.jpg" class="d-block w-100" alt="..."/>
        </div>
      </div>

        <button type="button" class='carousel-control-prev' data-bs-target="#carouselSlides"  data-bs-slide="prev">
              <span class="carousel-control-prev-icon visually hidden" aria-hidden="true"></span>
        </button>
        <button type="button" class='carousel-control-next' data-bs-target="#carouselSlides"  data-bs-slide="next">
             <span class="carousel-control-next-icon visually hidden" aria-hidden="true"></span>
        </button>
    </div>
    </div></section></div>
  );
}

export default Carousel;
    