import React, { useState } from 'react';

const ZoomImage = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div
      className={`relative ${isZoomed ? 'scale-150' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className="object-contain w-full h-full" />
    </div>
  );
};

export default ZoomImage;
