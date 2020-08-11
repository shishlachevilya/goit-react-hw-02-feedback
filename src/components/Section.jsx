import React from "react";

const Section = (props) => {
  const {title, children} = props;

  return (
    <>
      <h2>{title}</h2>

      {children}
    </>
  );
};

export default Section;
