import React from 'react';

// WeatherDisplay is a functional component that receives a prop called weatherData. This prop contains the weather information to be displayed.
export const WeatherDisplay = ({weatherData}) => {
     
    // This line checks if weatherData is falsy (e.g., null or undefined). If it is, the component returns null, meaning nothing will be rendered. This prevents errors if the weather data is not yet available.
    if (!weatherData) return null;
    
  return (
    <div className="text-center">

        {/* Location: A heading (<h2>) that displays the name of the location and the country using: */}
        <h2>{weatherData.location.name}, {weatherData.location.country}</h2>

        {/* Temperature: A paragraph (<p>) displaying the current temperature in degrees Celsius: */}
        <p>Temperature: {weatherData.current.temp_c} °C </p>

        {/* Weather Condition: A paragraph displaying the current weather condition (e.g., "Sunny"): */}
        <p>Condition: {weatherData.current.condition.text}</p>

        {/* Weather Icon: An image element (<img>) that displays the weather icon. The src attribute constructs a URL based on the icon provided in the weatherData: */}
        <img src={`https:${weatherData.current.condition.icon}`} alt="weather icon" />

        {/* Humidity: A paragraph showing the current humidity percentage */}
        <p>Humidity: {weatherData.current.humidity}%</p>

        {/* Wind Speed: A paragraph indicating the wind speed in kilometers per hour */}
        <p>Wind: {weatherData.current.wind_kph} kph</p>

    </div>

);
};
