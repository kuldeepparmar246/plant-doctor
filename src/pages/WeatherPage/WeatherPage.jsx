import { useState } from "react";
import styles from "./WeatherPage.module.css";

const WeatherPage = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");


  const fetchWeather = async () => {

    const url = import.meta.env.VITE_APP_SERVER_URL;

    setError("");
    setWeather(null);

    try {
      const res = await fetch(url+'/api/ask/weather', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location: location }),
      })
      
      const data = await res.json();
      if (data.cod != 200) throw new Error("Location not found");
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Check Weather</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p className={styles.error}>{error}</p>}

      {weather && (
        <div className={styles.weatherContainer}>
          <table className={styles.weatherTable}>
            <thead>
              <tr>
                <th colSpan="2">
                  {weather.name}, {weather.sys.country}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Temperature</td>
                <td>
                  {weather.main.temp}°C (Feels like: {weather.main.feels_like}
                  °C)
                </td>
              </tr>
              <tr>
                <td>Condition</td>
                <td>{weather.weather[0].description}</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{weather.main.humidity}%</td>
              </tr>
              <tr>
                <td>Wind Speed</td>
                <td>{weather.wind.speed} m/s</td>
              </tr>
              <tr>
                <td>Visibility</td>
                <td>{weather.visibility / 1000} km</td>
              </tr>
              <tr>
                <td>Sunrise</td>
                <td>
                  {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                </td>
              </tr>
              <tr>
                <td>Sunset</td>
                <td>
                  {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                </td>
              </tr>
              <tr>
                <td>Recommendation</td>
                <td>
                  {weather.main.temp > 30
                    ? "Consider irrigation and avoid midday fieldwork."
                    : "Conditions are suitable for most crop activities."}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
