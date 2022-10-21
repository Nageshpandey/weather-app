import React from "react";
//import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   ></Box>
// );

function WeatherUI(props) {
  // getting date, month, year-
  let d = new Date(props.data.time * 1000);
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let fullyear = d.getFullYear();
  let fullDate = date + "/" + month + "/" + fullyear;
  console.log(fullDate);

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          {!props.data.city ? (
            <Card sx={{ minWidth: 600, height: 335 }} id="card">
              {" "}
              <h2 style={{ fontSize: "25px" }}>
                You haven't enter the city name.
              </h2>
            </Card>
          ) : (
            <Card sx={{ minWidth: 600, height: 335 }} id="card">
              <div className="locationDate">
                <p id="city">City</p>
                <p id="cityName">{props.data.city}</p>
              </div>
              <div>
                <p>{fullDate}</p>
              </div>
              <div className="tempFeelsLike">
                <p id="temp">
                  {props.data.temp} <sup> °C</sup>
                </p>
                <p>
                  Feels Like {props.data.feelslike}
                  <sup> °C</sup>
                </p>
              </div>
              <div className="descriptionWeatherIcon">
                <img
                  src={props.data.weather_icon}
                  alt="whather icon"
                  id="img"
                />
                <p style={{ paddingLeft: "18px", fontWeight: "normal" }}>
                  {props.data.description}
                </p>
              </div>

              <div className="humidityWind">
                <p className="humidity_wind">
                  Humidity: {props.data.humidity} %{" "}
                </p>
                <p className="humidity_wind"> |</p>
                <p className="humidity_wind">
                  Wind : {props.data.wind_direction} {props.data.windSpeed} km/h
                </p>
              </div>
              <div className="wind"></div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherUI;
