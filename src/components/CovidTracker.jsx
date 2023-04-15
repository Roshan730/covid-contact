// App.js
import React, { useState, useEffect } from "react";
import "./CovidTracker.css"; // Import CSS file for styling

const CovidTracker = () => {
  const [worldwideData, setWorldwideData] = useState({});
  const [countryData, setCountryData] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [showWorldwideData, setShowWorldwideData] = useState(true);

  useEffect(() => {
    // Fetch worldwide COVID-19 data
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => setWorldwideData(data))
      .catch((error) => console.error("Error fetching worldwide data:", error));

    // Fetch country-specific COVID-19 data
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => setCountryData(data))
      .catch((error) => console.error("Error fetching country data:", error));
  }, []);

  // Function to handle search bar input
  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  };

  // Function to handle navbar button click
  const handleNavbarButtonClick = (showWorldwide) => {
    setShowWorldwideData(showWorldwide);
  };

  // Filter country data based on search input
  const filteredCountryData = countryData.filter((country) => {
    return country.country.toLowerCase().includes(searchCountry.toLowerCase());
  });

  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="navbar-title">COVID-19 Tracker</h1>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search Country"
            value={searchCountry}
            onChange={handleSearchCountry}
          />
        </div>
        <div className="navbar-buttons">
          <button
            className={`navbar-button ${showWorldwideData ? "active" : ""}`}
            onClick={() => handleNavbarButtonClick(true)}
          >
            Worldwide Data
          </button>
          <button
            className={`navbar-button ${!showWorldwideData ? "active" : ""}`}
            onClick={() => handleNavbarButtonClick(false)}
          >
            Country-specific Data
          </button>
        </div>
      </nav>
      <div className="data-container">
        {showWorldwideData ? (
          <div className="data-card">
            <h2>Worldwide Data</h2>
            <p>Total Cases: {worldwideData.cases}</p>
            <p>Total Deaths: {worldwideData.deaths}</p>
            <p>Total Recovered: {worldwideData.recovered}</p>
          </div>
        ) : (
          <div className="data-card">
            <h2>Country-specific Data</h2>
            {filteredCountryData.map((country) => (
              <div key={country.country}>
                <h3>{country.country}</h3>
                <p>Total Cases: {country.cases}</p>
                <p>Total Deaths: {country.deaths}</p>
                <p>Total Recovered: {country.recovered}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CovidTracker;
