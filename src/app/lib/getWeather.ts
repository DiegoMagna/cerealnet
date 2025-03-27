export async function getWeather() {
  const apiKey = "c1fb265dd99cc0008d13c7e3370cee3f";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=Buenos+Aires&units=metric&appid=${apiKey}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al obtener el clima");
  }

  const data = await res.json();

  // Tomar los primeros 3 días de pronóstico
  const forecast = data.list.slice(0, 3).map((day: any) => ({
    date: new Date(day.dt * 1000).toLocaleDateString(),
    tempMax: day.main.temp_max,
    tempMin: day.main.temp_min,
    rainChance: day.pop * 100, // Probabilidad de lluvia
  }));

  return {
    city: data.city.name,
    currentTemp: data.list[0].main.temp,
    humidity: data.list[0].main.humidity,
    windSpeed: data.list[0].wind.speed,
    forecast,
  };
}
