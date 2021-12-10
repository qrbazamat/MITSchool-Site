import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className="my-slider-item">
        <h3 className='spacial'>Beauty Color</h3>
      </div>
      <div className="my-slider-item bg-primary">
        <h3 className='spacial'>This is Primary</h3>
      </div>
      <div className="my-slider-item bg-warning">
        <h3 className='spacial'>This is Warning</h3>
      </div>
      <div className="my-slider-item bg-info">
        <h3 className='spacial'>This is Info</h3>
      </div>
      <div className="my-slider-item bg-danger">
        <h3 style={{color: 'blue'}}>This is Danger</h3>
      </div>
      <div className="my-slider-item bg-success">
        <h3 className='spacial'>This is Success</h3>
      </div>
    </Slider>
  );
}