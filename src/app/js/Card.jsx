import React from "react";

const Card = ({beer}) => {
    
    const creator = beer.contributed_by.split(" <")[0]

    
  return (
    <div className="container card">
    <div className="row">
      <div className="col-2 image-card-container">
        <img src={beer.image_url} />
      </div>
      <div className="col-10">
        <h2>{beer.name}</h2>
        <h4>{beer.tagline}</h4>
        <p><strong>created by: </strong>{creator}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Card;
