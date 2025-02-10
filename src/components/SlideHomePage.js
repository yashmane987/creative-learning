import Carousel from "react-bootstrap/Carousel";
 import slider1 from '../images/slider1.jpeg';
import slider from '../images/slider.jpeg';
import slider2 from '../images/slider2.jpeg';
import slider3 from '../images/slider3.jpeg';
import home1 from "../images/home1.png";
import home2 from "../images/home2.png";
import home3 from "../images/home3.png";
import home4 from "../images/home4.png";

function SliderHomePage() {
 
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={1000}>
      <img
          className="learn"
          src={slider}
          alt=""
        />
        <Carousel.Caption>
          <h3>"Explore Your Creativity"</h3>
          <p>"Discover courses that inspire creativity and unlock your potential"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="learn"
          src={slider1}
          alt=""
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
          alt=""
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
          alt=""
        />
        <Carousel.Caption>
          <h3>"Unleash Creativity"</h3>
          <p>"Unlock creativity and learn new skills with our platform"</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


<div className="main-div">
  <div className="row">
    <div className="col-sm-3">
      <div className="box">
        <img src={home1} className="img-box" alt=""/>
        <h5>The Experts</h5>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="box">
        <img src={home2} className="img-box" alt=""/>
        <h5>Free Notes</h5>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="box">
        <img src={home3} className="img-box"alt="" />
        <h5>Pre-Recorded Videos</h5>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="box">
        <img src={home4} className="img-box" alt="" />
        <h5>2000+ Enrolled</h5>
      </div>
    </div>
  </div>
</div>
</div>

  );
}

export default SliderHomePage;