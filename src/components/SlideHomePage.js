import Carousel from "react-bootstrap/Carousel";
 import slider1 from '../images/slider1.jpeg';
import slider from '../images/slider.jpeg';
import slider2 from '../images/slider2.jpeg';
import slider3 from '../images/slider3.jpeg';

function SliderHomePage() {
 
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img
          className="learn"
          src={slider1}
          alt="Image One"
        />
        <Carousel.Caption>
          <h3>"Explore Your Creativity"</h3>
          <p>"Discover courses that inspire creativity and unlock your potential"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="learn"
          src={slider}
          alt="Image two"
        />
        <Carousel.Caption>
          <h3>"Unleash Creativity"</h3>
          <p>"Unlock creativity and learn new skills with our platform"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="learn"
          src={slider2}
          alt="Image three"
        />
        <Carousel.Caption>
          <h3>"Unleash Creativity"</h3>
          <p>"Unlock creativity and learn new skills with our platform"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="learn"
          src={slider3}
          alt="Image four"
        />
        <Carousel.Caption>
          <h3>"Unleash Creativity"</h3>
          <p>"Unlock creativity and learn new skills with our platform"</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderHomePage;