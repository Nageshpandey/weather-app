import React from "react";
import DataFetching from "./components/DataFetching";
import "./App.css";
function App() {
  return (
    <div id="app">
      <div id="heading">
        <h2>Weather App</h2>
      </div>
      <DataFetching />
    </div>
  );
}
export default App;
