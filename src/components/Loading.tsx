import React from "react";

export const Loading = () => {
  return (
    <div className="loading-map d-flex justify-content-center align-items-center flex-column" >
      
      <div className="spinner-grow text-primary" role="status" aria-hidden="true"></div>
      <p className="sr-only text-primary">Loading...</p>
    </div>
  );
};
