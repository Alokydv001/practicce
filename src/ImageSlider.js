import React, { useState } from 'react';

const ImageSlider = () => {
  const images = [
    { id: 1, imageUrl: 'Gurugram.jpeg' },
    { id: 2, imageUrl: 'instant' },
    { id: 3, imageUrl: 'image3.jpg' },
    { id: 4, imageUrl: 'image4.jpg' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const goToNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const goToImage = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <h1>Image Slider</h1>
      <div className="slider-container">
        <button onClick={goToPrevious}>Previous</button>
        <img src={images[activeIndex].imageUrl} alt={`Image ${activeIndex + 1}`} />
        <button onClick={goToNext}>Next</button>
      </div>
      <div className="option-circles">
        {images.map((image, index) => (
          <span
            key={image.id}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
