import React, {  useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from "react-router-dom";


const MultiCarousel = () =>  {


        window.scrollTo(0, 0)
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };

        const [tasks,settasks] = useState([{isLoading: true, display: true, width: 98}])

        useEffect( () => {
          const fetchtasks = async () => {
            const res = await fetch('http://localhost:3000/posts')
            const data = await res.json() ;
            settasks(data)
            
          }
          console.log(fetchtasks())
      
        },[] )
      

        return (
            <div className="carousel-wrapper">
                <div className="home" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', paddingLeft: '2.1rem', color: 'hsl(265, 74%, 23%)', backgroundColor: 'hsl(247, 69%, 97%)', paddingTop: '0.5rem' }}>
                    <p><b className="drpsh">Latest Templates </b> </p>
                </div>
                <div>
                    <div style={{ marginLeft: '2.1rem', paddingBottom: '4rem' }}>
                        <div
                            // style={{
                            //     width: this.state.width + "%",
                            //     display: this.state.display ? "block" : "none"
                            // }}
                        >
                            <Slider {...settings} arrows={false}>
                                <div>
                                <Link to="/multi" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <Card className="bgopac drpsh" style={{ width: '18rem', backgroundColor: 'transparent', border: 'transparent'  }}>
                                        <Card.Img style={{borderRadius: '10px', border: '1px solid black'}} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Madurai-tank.jpg" />
                                        <Card.Body>
                                            <Card.Title>Triambakeshwar</Card.Title>
                                            <Card.Text>
                                                <div style={{color: 'red'}}>
                                            <IoLocationSharp /> <span className="mahfo"> Maharashtra</span>
                                            </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                                </div>
                                <div>
                                <Link to="/multi" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <Card className="bgopac drpsh" style={{ width: '18rem', backgroundColor: 'transparent', border: 'transparent'  }}>
                                        <Card.Img style={{borderRadius: '10px', border: '1px solid black'}} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Madurai-tank.jpg" />
                                        <Card.Body>
                                            <Card.Title>Triambakeshwar</Card.Title>
                                            <Card.Text>
                                                <div style={{color: 'red'}}>
                                            <IoLocationSharp /> <span className="mahfo"> Maharashtra</span>
                                            </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                                </div>
                                <div>
                                <Link to="/multi" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <Card className="bgopac drpsh" style={{ width: '18rem', backgroundColor: 'transparent', border: 'transparent'  }}>
                                        <Card.Img style={{borderRadius: '10px', border: '1px solid black'}} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Madurai-tank.jpg" />
                                        <Card.Body>
                                            <Card.Title>Triambakeshwar</Card.Title>
                                            <Card.Text>
                                                <div style={{color: 'red'}}>
                                            <IoLocationSharp /> <span className="mahfo"> Maharashtra</span>
                                            </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                                </div>
                                <div>
                                <Link to="/multi" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <Card className="bgopac drpsh" style={{ width: '18rem', backgroundColor: 'transparent', border: 'transparent'  }}>
                                        <Card.Img style={{borderRadius: '10px', border: '1px solid black'}} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Madurai-tank.jpg" />
                                        <Card.Body>
                                            <Card.Title>Triambakeshwar</Card.Title>
                                            <Card.Text>
                                                <div style={{color: 'red'}}>
                                            <IoLocationSharp /> <span className="mahfo"> Maharashtra</span>
                                            </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                                </div>
                                <div>
                                <Link to="/multi" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <Card className="bgopac drpsh" style={{ width: '18rem', backgroundColor: 'transparent', border: 'transparent'  }}>
                                        <Card.Img style={{borderRadius: '10px', border: '1px solid black'}} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Madurai-tank.jpg" />
                                        <Card.Body>
                                            <Card.Title>Triambakeshwar</Card.Title>
                                            <Card.Text>
                                                <div style={{color: 'red'}}>
                                            <IoLocationSharp /> <span className="mahfo"> Maharashtra</span>
                                            </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                                </div>
                                <div>
                                <Link to="/multi" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <Card className="bgopac drpsh" style={{ width: '18rem', backgroundColor: 'transparent', border: 'transparent'  }}>
                                        <Card.Img style={{borderRadius: '10px', border: '1px solid black'}} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Madurai-tank.jpg" />
                                        <Card.Body>
                                            <Card.Title>Triambakeshwar</Card.Title>
                                            <Card.Text>
                                                <div style={{color: 'red'}}>
                                            <IoLocationSharp /> <span className="mahfo"> Maharashtra</span>
                                            </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}


export default MultiCarousel;