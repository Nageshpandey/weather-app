import React from "react";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import WeatherUI from "./WeatherUI";
import { GoSearch } from "react-icons/go";

function DataFetching() {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState({
    city: "",
    description: "",
    temp: 0,
    time: 0,
    windSpeed: 0,
    wind_direction: "",
    weather_icon: "",
    humidity: 0,
    feelslike: 0,
  });
  // Data fetching - API call -
  
  const fetchData = () => {
    // const params =  URLSearchParams({
    //   access_key: '4e5e06828c829d2c97c23d4b5992133e',
    //   query: 'New York',
    //   units: 'f'
  
    // })
    axios.get(
        `http://api.weatherstack.com/current?access_key=4e5e06828c829d2c97c23d4b5992133e&query=${cityName}`
      )
      .then((response) => {
        console.log(response.data);
        setData({
          city: response.data.location.name,
          description: response.data.current.weather_descriptions[0],
          temp: response.data.current.temperature,
          time: response.data.location.localtime_epoch,
          windSpeed: response.data.current.wind_speed,
          wind_direction: response.data.current.wind_dir,
          weather_icon: response.data.current.weather_icons,
          humidity: response.data.current.humidity,
          feelslike: response.data.current.feelslike,
        });
      })
      .catch((response) => {
        console.log(response + "please enter the valid keyword");
      });
  };
  console.log(data);

  return (
    <Box id="main-container">
      <Box id="box">
        <GoSearch id="searchicon" />
        <TextField
          id="standard-basic"
          label="Search city"
          variant="standard"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <Button id="btn" variant="contained" onClick={fetchData}>
          Search
        </Button>
      </Box>
      <div id="separator"></div>
      <WeatherUI data={data} />
    </Box>
  );
}

export default DataFetching;
