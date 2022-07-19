import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from "./components/carousel.component";
import "react-responsive-carousel/lib/styles/carousel.min.css";



function Home() {
  return (
   <div className="App">
   <CarouselComponent />
 </div>
  );
}

export default Home;