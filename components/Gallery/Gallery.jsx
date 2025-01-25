import React from "react";

const Gallery = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
};

export default Gallery;
