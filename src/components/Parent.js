import React, { useState } from "react";
import Child from "./Child";
import Button from "@mui/material/Button";
const Parent = () => {
  const [details1, setDetails1] = useState({
    name: "jhon",
    contact: "910811",
    address: {
      streetName: "1st Cross",
      city: "banglore",
    },
  });

  const [details2, setDetails2] = useState({
    name: "deo",
    contact: "6789098",
    address: {
      streetName: "2nd cross",
      city: "Tumakuru",
    },
  });

  const handleChangeDetails1Name = () => {
    setDetails1({ ...details1, name: "mark" });
  };

  const handleChangeDetails2Name = () => {
    setDetails2({
      ...details2,
      contact: "88803939668",
      address: { ...details2.address, city: "Belagavi" },
    });
  };

  console.log("details1", details1);
  return (
    <div>
      <h1> ParentComponent</h1>

      <Button
        variant="contained"
        onClick={() => {
          handleChangeDetails1Name();
        }}
      >
        change details1 name
      </Button>

      <Button variant="contained" onClick={() => handleChangeDetails2Name()}>
        change details2 name
      </Button>
      <Child
        name={details1.name}
        contact={details1.contact}
        address={details1.address}
      />
      <Child
        name={details2.name}
        contact={details2.contact}
        address={details2.address}
      />
    </div>
  );
};

export default Parent;
