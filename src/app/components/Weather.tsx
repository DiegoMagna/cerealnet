"use client";

import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [location, setLocation] = useState("Detectando ubicación...");
  const [error, setError] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const apiKey = "c1fb265dd99cc0008d13c7e3370cee3f";

            // Clima actual
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=es`;
            const weatherRes = await fetch(weatherUrl);
            if (!weatherRes.ok) throw new Error("No se pudo obtener el clima actual");
            const weatherData = await weatherRes.json();

            // Pronóstico extendido (próximos 3 días)
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=es`;
            const forecastRes = await fetch(forecastUrl);
            if (!forecastRes.ok) throw new Error("No se pudo obtener el pronóstico");
            const forecastData = await forecastRes.json();

            // Filtrar datos del pronóstico (1 por día, en horario del mediodía)
            const dailyForecast = forecastData.list.filter((item: any) =>
              item.dt_txt.includes("12:00:00")
            ).slice(0, 3); // Solo los próximos 3 días

            setWeather({
              city: weatherData.name,
              temp: weatherData.main.temp,
              humidity: weatherData.main.humidity,
              windSpeed: weatherData.wind.speed,
            });

            setForecast(dailyForecast.map((day: any) => ({
              date: new Date(day.dt * 1000).toLocaleDateString("es-ES", {
                weekday: "long",
                day: "numeric",
                month: "short",
              }),
              tempMax: day.main.temp_max,
              tempMin: day.main.temp_min,
              rainChance: Math.round(day.pop * 100), // Probabilidad de lluvia (%)
            })));

            setLocation(weatherData.name);
          } catch (err) {
            setError("No se pudo obtener el clima.");
          }
        },
        (error) => {
          console.error("Error obteniendo ubicación:", error);
          setError("No se pudo acceder a la ubicación.");
        }
      );
    } else {
      setError("La geolocalización no es compatible con este navegador.");
    }
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-green-700">
        🌤️ Clima en {error ? "Desconocido" : location}
      </h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : weather ? (
        <>
          <p className="text-gray-700 mt-2"><strong>🌡️</strong> {Math.round(weather.temp)}°C</p>
          <p className="text-gray-700"><strong>💧</strong> {weather.humidity}%</p>
          <p className="text-gray-700"><strong>🌬️</strong> {weather.windSpeed} km/h</p>

          {/* Pronóstico Extendido */}
          <h3 className="text-md font-semibold mt-4 text-green-700">📅 Pronóstico</h3>
          <ul className="mt-2 space-y-2">
            {forecast.map((day, index) => (
              <li key={index} className="bg-gray-50 p-2 rounded shadow-sm flex justify-between">
                <span className="text-xs">{day.date}</span>
                <span>🌡️ {day.tempMin}°C - {day.tempMax}°C</span>
                <span>🌧️ {day.rainChance}%</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-gray-700 mt-2">Obteniendo datos...</p>
      )}
    </div>
  );
};

export default Weather;
