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
      if (!res.ok) throw new Error("Location not found");
      const data = await res.json();
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
        <div className={styles.info}>
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>🌡 Temp: {weather.main.temp}°C</p>
          <p>☁ Weather: {weather.weather[0].description}</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
