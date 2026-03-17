import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ error: "Missing lat/lon" }, { status: 400 });
  }

  try {
    const hourly = [
      "temperature_2m",
      "relativehumidity_2m",
      "apparent_temperature",
      "precipitation",
      "weathercode",
      "windspeed_10m",
      "winddirection_10m",
    ].join(",");

    const daily = [
      "temperature_2m_max",
      "temperature_2m_min",
      "apparent_temperature_max",
      "apparent_temperature_min",
      "sunrise",
      "sunset",
      "uv_index_max",
      "precipitation_sum",
      "windspeed_10m_max",
    ].join(",");

    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: lat,
        longitude: lon,
        hourly,
        daily,
        current_weather: true,
        timezone: "auto",
      },
    });

    return NextResponse.json(response.data);
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    return NextResponse.json(
      { error: "Failed to fetch weather", details: err.response?.data },
      { status: 500 }
    );
  }
}