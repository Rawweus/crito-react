import React from "react";

const FeatureBox = ({ title, paragraph, icon }) => {
  return (
    <div>
      {icon}
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default FeatureBox;
