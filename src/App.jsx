import { useState } from 'react';
import './App.css';
import { WeatherForm } from './components/WeatherForm';
import axios from 'axios';
import { WeatherDisplay } from './components/weatherDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ForecastDisplay } from './components/forecastDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const weatherResponse = await axios.get(`http://localhost:5000/weather/${city}`);
      setWeatherData(weatherResponse.data);
      setError(null);
      await fetchForecast(city); // Fetch forecast after current weather
    } catch (error) {
      console.error('Error fetching weather data:', error);
      if (error.response && error.response.status === 404) {
        setError('City not found. Please try again.');
      } else {
        setError('Error fetching weather data. Please try again.');
      }
      setWeatherData(null);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  
  const fetchForecast = async (city) => {
    try {
      const forecastResponse = await axios.get(`http://localhost:5000/weather/forecast/${city}`);
      setForecastData(forecastResponse.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching forecast data:', error);

      if (error.response && error.response.status === 404) {
        setError('City not found. Please try again.');
      } else {
        setError('Error fetching forecast data. Please try again.');
      }
      setForecastData(null);
    }
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-color'>Weather App</h1>
      <WeatherForm onSearch={fetchWeather} />

      {loading && <div className="alert alert-info">Loading...</div>} {/* Loading indicator */}
      {error && <div className="alert alert-danger">{error}</div>} {/* Display error */}

      <WeatherDisplay weatherData={weatherData} />
      <ForecastDisplay forecastData={forecastData} />
    </div>
  );
}

export default App;
