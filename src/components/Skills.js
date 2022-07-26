import meter1 from "../assets/img/skill01.png";
import meter2 from "../assets/img/skill02.png";
import meter3 from "../assets/img/skill03.png";
import meter4 from "../assets/img/skill04.png";
import meter5 from "../assets/img/skill05.png";
import meter6 from "../assets/img/skill06.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn ">
                        <p>MINHAS SKILLS E POWER UP’S</p>
                        <Carousel responsive={responsive} infinite={true} arrows={false} swipeable={true}  className=" skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <p>REACT e REACT NATIVE</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <p>SASS</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <p>NODE.js</p>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <p>SINGLE-SPA</p>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <p>JAVASCRIPT</p>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <p>STYLED COMPONENTS</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
