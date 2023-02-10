import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

function Carouselpart() {
  return (
    <Carousel>
      <Carousel.Item>
        <div>
          <img className="firstSlide" style={{width: "100%", height: "100%"}} src = "/images/img1.jpg" alt = "first add image"/>
            <div class="carousel-content" style = {{position: "absolute", bottom: "40%", zIndex: "20", color: "black"}}>
              <div style = {{marginLeft: "10%", textAlign: "left"}}>
                <h6 style = {{color: "red"}}>SUMMER COLLECTION</h6>
                <h1>Fall - Winter</h1>
                <h1>Collection 2030</h1>
                <p style={{marginRight: "40%"}}>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
              </div>
              <div>
                <button style={{backgroundColor: "black", marginLeft: "0%", padding: "11px 60px", color: "white", marginRight: "55%", textAlign: "center"}}>SHOP NOW</button>
              </div>
            </div>
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Carouselpart;