import React from 'react';

//import  Carousel  from 'react-bootstrap/Carousel'
import  {Carousel}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider1 from '../images/banner4.jpg';
import Slider2 from '../images/banner5.jpg';
import Slider3 from '../images/banner3.jpg';
import Slider4 from '../images/banner2.jpg';
import Slider5 from '../images/banner1.jpg';
function Slider(){
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src={Slider1}  height="400" width="100%" alt="Slider1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Slider2}  height="400" width="100%" alt="Slider2"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Slider3}  height="400" width="100%" alt="Slider3"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Slider4}  height="400" width="100%" alt="Slider3"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Slider5}  height="400" width="100%" alt="Slider3"/>
                </Carousel.Item>
            </Carousel>
        </div>
//         <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//   <ol className="carousel-indicators">
//     <li  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"  ></li>
//     <li  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></li>
//     <li  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></li>
//   </ol>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src={Slider1} className="d-block w-100  h-300 " alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src={Slider2} className="d-block w-100 h-300" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src={Slider3}className="d-block w-100 h-300 " alt="..."/>
//     </div>
//   </div>
//   <a className="carousel-control-prev"  href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </a>
//   <a className="carousel-control-next" href ="#carouselExampleIndicators" role="button" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </a>
// </div>
    )

}
export default Slider;