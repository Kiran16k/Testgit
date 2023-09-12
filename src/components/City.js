import React, { useState } from "react";
import { Link } from "react-router-dom";

const CityList = ({ cities }) => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [movedCities, setMovedCities] = useState([]);

  const handleCityToggle = (city) => {
    if (selectedCities.includes(city)) {
      setSelectedCities(
        selectedCities.filter((selectedCity) => selectedCity !== city)
      );
    } else {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const handleOKClick = () => {
    setMovedCities(selectedCities);
    setSelectedCities([]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "blue",
        color: "white",
      }}
    >
      {" "}
      <h1>cities </h1>
      <ul style={{ listStyle: "none" }}>
        {cities.map((city) => (
          <li key={city}>
            <label>
              <input
                type="checkbox"
                checked={selectedCities.includes(city)}
                onChange={() => handleCityToggle(city)}
              />
              {city}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleOKClick}>OK</button>
      <ul style={{ listStyle: "none" }}>
        {movedCities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
      <div style={{ backgroundColor: "white" }}>
        <Link to="/">Click here to return back to DashBoard</Link>
      </div>
    </div>
  );
};

export default CityList;
