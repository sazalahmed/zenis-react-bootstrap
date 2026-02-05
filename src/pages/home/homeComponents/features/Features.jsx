import React from "react";
import "./Features.css";
import useData from "../../../../hooks/Hooks";

const Features = () => {
  const { features } = useData();

  return (
    <div className="features mt-4">
      <div className="container">
        <div className="row">
          {features?.map((item) => (
            <div className="col-xl-3 col-md-6" key={item.id}>
              <div className={`features_item ${item.color}`}>
                <div className="icon">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
