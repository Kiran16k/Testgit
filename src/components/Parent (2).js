import React, { useState } from "react";
import Child from "./Child";
import { Link } from "react-router-dom";

const Parent = () => {
  const [name, setName] = useState("interone");
  const handleChange = (e) => {
    console.log("event::", e.target.value);
    setName(e.target.value);
  };
  return (
    <div>
      Parent Component ::{" "}
      <input
        className="interone"
        type="text"
        value={name}
        onChange={handleChange}
      />
      {console.log("inside render /return")}
      {console.log("name::inside render", name)}
      <Child name={name} />
      <div>
        <Link to="/">Click here to return back to DashBoard</Link>
      </div>
    </div>
  );
};
export default Parent;
