import React from "react";

const Child = (props) => {
  console.log("childcomponentProps", props);
  return (
    <div>
      <h1>ChildComponent</h1>
      <p>name:{props.name}</p>
      <p>contact:{props.contact}</p>
      <p>
        address: {props.address?.streetName} {props.address?.city}{" "}
      </p>
    </div>
  );
};
export default Child;
