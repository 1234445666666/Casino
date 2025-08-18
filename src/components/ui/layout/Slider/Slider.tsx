import { Carousel } from "antd";
import "./Slider.scss";

export default function Slider() {
  return (
    <div className="slider">
      <div className="slide-Container">
        {/* true */}
        <Carousel arrows infinite={false}>
          <div className="slide-1">
            <img
              src="https://i.pinimg.com/736x/c0/ef/53/c0ef53cb072f57a80ac83a5667104585.jpg"
              alt="Nihuya"
            ></img>
          </div>
          <div className="slide-2">
            <img
              src="https://www.meme-arsenal.com/memes/6c4e4684e52b24da986d7f152c2e0e63.jpg"
              alt="Nihuya"
            ></img>
          </div>
          <div className="slide-3">
            <img
              src="https://i.pinimg.com/280x280_RS/da/bc/29/dabc29fae5e622d95883e0903e3a91bd.jpg"
              alt="Nihuya"
            ></img>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
