import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ headingFirst, headingShapes, headingLast }) => {
  return (
    <div className="section_heading">
      <h2 className="">
        {headingFirst} <span className="">{headingShapes}</span> {headingLast}
      </h2>
    </div>
  );
};

export default SectionHeading;

{
  // import this
  /* <SectionHeading headingShapes={"flash"} headingLast={"Sell"} /> */
}
