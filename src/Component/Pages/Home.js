import React from 'react';
//import Slider from '../inc/Slider';
import Slider from '../inc/Slider.js';
import Vmc from './inc/Vmc';
import { Link } from 'react-router-dom';
import Books from '../images/banner4.jpg';
import Books1 from '../images/banner5.jpg';
import Books3 from '../images/banner3.jpg';
import Books4 from '../images/banner2.jpg';
import Books5 from '../images/banner1.jpg';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
    return (
        <div> 
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center ">
                            <h3 className="main-heading">OUR COMPANY</h3>
                            <div className="underline mx-auto"> </div>

                            <p className="text-white"id="test2" >
                                Dummy: A rough mock-up of a book that usually shows where all front matter, text and illustrations, and back matter will appear. Some dummies include actual sketches and images. Frontlist: All of the books released in the current season and featured in the publisher's latest catalog.
                            </p>
                            <Link to="./about" className="btn btn-warning shadow">Read more</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Vmc />
            {/* <our Services/> */}
            <React.Fragment>
            <div>
               
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" >
                                <img src={Books1} class="card-img-top" alt="..." height="200px" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" >
                                <img src={Books3} class="card-img-top" alt="..." height="200px" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <img src={Books} className="card-img-top " alt="..."height="200px" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

        </div>
    )
}
export default Home;