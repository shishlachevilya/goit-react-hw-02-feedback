import React from "react";

const Values = ({ good, neutral, bad, total }) => (
  <>
    <h2>Statistics</h2>
    <ul>
      <li>good:{good}</li>
      <li>neutral:{neutral}</li>
      <li>bad:{bad}</li>
      <li>total:{total}</li>
      <li>positiv feedback:{}</li>
    </ul>
  </>
);
export default Values;
