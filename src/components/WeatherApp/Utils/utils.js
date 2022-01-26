import moment from "moment";

export const currentDayForecastDetails = (data) => [
  {
    name: "predictability",
    value: data.predictability,
    unit: "%",
  },
  {
    name: "humidity",
    value: data.humidity,
    unit: "%",
  },
  {
    name: "wind",
    value: Math.round(data.wind_speed),
    unit: "km/h",
  },
  {
    name: "air pressure",
    value: data.air_pressure,
    unit: "mb",
  },
  {
    name: "max temp",
    value: Math.round(data.max_temp),
    unit: "°C",
  },
  {
    name: "min temp",
    value: Math.round(data.min_temp),
    unit: "°C",
  },
];

export const getCurrentDayForecast = (data, title) => ({
  weekday: moment(data.applicable_date).format("dddd"),
  date: moment(data.applicable_date).format("MMMM Do"),
  location: title,
  temperature: Math.round(data.the_temp),
  weatherIcon: `'https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
  weatherDescription: data.weather_state_name,
});

export const getWeekday = (date) => moment(date).format("dddd").substring(0, 3);

export const getUpcomingDaysForecast = (data) =>
  data.slice(1).map((day) => ({
    imgUrl: day.weather_state_abbr,
    temperature: Math.round(day.max_temp),
    weekday: getWeekday(day.applicable_date),
  }));
