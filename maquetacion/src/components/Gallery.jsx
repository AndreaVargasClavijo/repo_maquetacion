import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Example images
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ];

  return (
    <main className="main">
      <div className="gallery">
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Gallery item ${index}`} />
        ))}
      </div>
    </main>
  );
};

export default Gallery;