import React from 'react';

// ForecastDisplay is defined as a functional component that receives a prop called forecastData, which contains the weather forecast information.
export const ForecastDisplay = ({ forecastData }) => {
  // This line checks if forecastData is falsy (null or undefined). If it is, the component returns null, meaning nothing will be rendered.
  if (!forecastData) return null;

  // Ensure the data is available in the expected format
  if (!forecastData.forecast || !forecastData.forecast.forecastday) return null;

  return (
    <div>
      <h3>5-Day Forecast</h3>
      <div className="row">
        {/* Use forecastData.forecast.forecastday to map over the 5-day forecast */}
        {forecastData.forecast.forecastday.map((day, index) => (
          <div className="col-md-2" key={index}>
            <div className="card">
              <div className="card-body">
                <h5>{day.date}</h5>
                <p>Max Temp: {day.day.maxtemp_c} °C</p>
                <p>Min Temp: {day.day.mintemp_c} °C</p>
                <p>{day.day.condition.text}</p>
                <img src={day.day.condition.icon} alt="weather icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
