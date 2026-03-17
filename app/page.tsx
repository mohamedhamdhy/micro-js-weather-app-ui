"use client";

import { useState } from "react";
import {
  GeoResult,
  WeatherData,
  searchCityAPI,
  fetchWeatherAPI,
} from "./api/weather";

export default function Home() {
  const [cityName, setCityName] = useState("");
  const [geoResults, setGeoResults] = useState<GeoResult[]>([]);
  const [selectedCity, setSelectedCity] = useState<GeoResult | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const searchCity = async () => {
    if (!cityName.trim()) return;
    const results = await searchCityAPI(cityName);
    setGeoResults(results);
  };

  const fetchWeather = async (city: GeoResult) => {
    setSelectedCity(city);
    setGeoResults([]);
    setLoading(true);
    const data = await fetchWeatherAPI(city.latitude, city.longitude);
    setWeatherData(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 font-protest text-red-900 w-full">
      <h1 className="text-4xl font-bold mb-6 text-center">Weather App</h1>

      <div className="relative w-full max-w-md mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter city name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            className="w-full p-2 border border-red-900 rounded text-red-900"
          />
          <button
            onClick={searchCity}
            className="p-2 bg-red-900 text-white rounded"
          >
            Search
          </button>
        </div>

        {geoResults.length > 0 && (
          <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-full bg-black border border-red-900 rounded shadow z-10 max-h-60 overflow-y-auto">
            {geoResults.map((city) => (
              <li
                key={`${city.name}-${city.latitude}`}
                onClick={() => fetchWeather(city)}
                className="cursor-pointer p-2 hover:bg-red-200"
              >
                {city.name}, {city.country}
              </li>
            ))}
          </ul>
        )}
      </div>

      {loading && <p className="mb-4">Loading weather data...</p>}

      {weatherData && selectedCity && (
        <div className="w-full max-w-2xl p-4 rounded shadow text-red-900">
          <h2 className="text-2xl font-bold mb-4">
            {selectedCity.name}, {selectedCity.country}
          </h2>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Current Weather:</h3>
            <table className="min-w-full border border-gray-300">
              <tbody>
                <tr>
                  <td className="border px-2 py-1 font-semibold">
                    Temperature
                  </td>
                  <td className="border px-2 py-1">
                    {weatherData.current_weather.temperature}°C
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-semibold">Wind</td>
                  <td className="border px-2 py-1">
                    {weatherData.current_weather.windspeed} km/h
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-semibold">
                    Weather Code
                  </td>
                  <td className="border px-2 py-1">
                    {weatherData.current_weather.weathercode}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {weatherData.daily && (
            <div className="mb-6 overflow-x-auto">
              <h3 className="font-semibold mb-2">Daily Forecast:</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-red-500">
                  <tr>
                    <th className="border px-2 py-1">Date</th>
                    <th className="border px-2 py-1">Max Temp (°C)</th>
                    <th className="border px-2 py-1">Min Temp (°C)</th>
                  </tr>
                </thead>
                <tbody>
                  {weatherData.daily.time.map((date: string, idx: number) => (
                    <tr key={date}>
                      <td className="border px-2 py-1 text-center">{date}</td>
                      <td className="border px-2 py-1 text-center">
                        {weatherData.daily.temperature_2m_max[idx]}°C
                      </td>
                      <td className="border px-2 py-1 text-center">
                        {weatherData.daily.temperature_2m_min[idx]}°C
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {weatherData.hourly && (
            <div className="overflow-x-auto">
              <h3 className="font-semibold mb-2">
                Hourly Forecast (Next 24h):
              </h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-red-500">
                  <tr>
                    <th className="border px-2 py-1">Time</th>
                    <th className="border px-2 py-1">Temp (°C)</th>
                    <th className="border px-2 py-1">Weather Code</th>
                  </tr>
                </thead>
                <tbody>
                  {weatherData.hourly.time
                    .slice(0, 24)
                    .map((time: string, idx: number) => (
                      <tr key={time}>
                        <td className="border px-2 py-1 text-center">
                          {time.split("T")[1]}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {weatherData.hourly.temperature_2m[idx]}°C
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {weatherData.hourly.weathercode[idx]}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
