import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MultiCarousel from "./MultiCarousel.component";
import Famous from "./Famous.component";
import DummyComponent from "./Dummy.component";



const CarouselComponent = () =>  {
  

        return (
            <>
            <div className="carousel-wrapper">
                <div className="home" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', paddingLeft: '2.1rem', color: 'hsl(265, 74%, 23%)', backgroundColor: 'hsl(247, 69%, 97%)', paddingTop: '0.5rem' }}>
                    <p><b className="drpsh">Home </b> </p>
                </div>
                <Carousel autoPlay={true} infiniteLoop={true} swipeToSlide={true} showStatus={false} showArrows={false} showThumbs={false} showIndicators={true} transitionTime={1000} >
                    <div>
                        <img src="https://templesofindia.org/assets/compressed/a3dda96f40f5a0f3ae8cda35739116d5_248.jpeg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://www.gosahin.com/go/p/e/1528618546_Jwala-Devi-Temple1.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://navbharattimes.indiatimes.com/photo/msid-68751694,imgsize-466338/pic.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/tour7_20181017194202.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://travfoodie.com/wp-content/uploads/2021/11/10__1636983078_103.208.69.21.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://templesofindia.org/assets/compressed/413f28409e95e3174c665df06bcb0ce6_2089.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://t4.ftcdn.net/jpg/01/26/46/93/360_F_126469346_5m2H50Qm3LV6JToY6jIc8wsG49LiJyrE.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://templesofindia.org/assets/compressed/e7b2384e5556abf822cdac95e81b0dd2_231.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/koteshwar-mahadev-temple/Koteshwar-Mahadev-Temple-Thumbnail.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://content.jdmagicbox.com/comp/bangalore/r7/080pxx80.xx80.180411120125.z6r7/catalogue/sri-bhavahara-ganapathi-temple-race-course-road-bangalore-temples-9tfashflzx-250.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://sanatantv.live/wp-content/uploads/2022/02/274585567_2743601255945629_2006343038838009264_n.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://vedicfeed.com/wp-content/uploads/2018/12/Mahakaleshwar-Jyotirlinga-1024x576.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://wbtourism.gov.in/home/download/places/belurmathinner.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_479585620_20191024174904_20200407155734.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                    <div>
                        <img src="https://i.ytimg.com/vi/7uCT2qUCzCs/maxresdefault.jpg" style={{ paddingBottom: '4rem' }} alt="text" />
                    </div>
                 
                </Carousel>

                <MultiCarousel></MultiCarousel>
                <Famous></Famous>
                <DummyComponent></DummyComponent>
                
            </div>
            </>
        );
}

export default CarouselComponent;