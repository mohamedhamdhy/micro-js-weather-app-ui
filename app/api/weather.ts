import axios from "axios";

export interface WeatherData {
  current_weather: any;
  hourly: any;
  daily: any;
}

export interface GeoResult {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}

export const searchCityAPI = async (cityName: string): Promise<GeoResult[]> => {
  if (!cityName) return [];
  try {
    const res = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10`);
    return res.data.results || [];
  } catch (err) {
    console.error("Error searching cities:", err);
    return [];
  }
};

export const fetchWeatherAPI = async (lat: number, lon: number): Promise<WeatherData | null> => {
  try {
    const res = await axios.get(`/api/weather`, {
      params: { lat, lon },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching weather:", err);
    return null;
  }
};