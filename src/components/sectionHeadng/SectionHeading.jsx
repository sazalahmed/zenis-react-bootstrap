import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ headingFirst, headingShapes, headingLast }) => {
  return (
    <div className="section_heading">
      <h2>
        {headingFirst} <span>{headingShapes}</span> {headingLast}
      </h2>
    </div>
  );
};

export default SectionHeading;
