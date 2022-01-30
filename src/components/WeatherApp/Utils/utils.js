import dayjs from "dayjs";
import "dayjs/locale/pl";

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

export const currentDayForecastDetails = (data) => [
  {
    name: {
      english: "predictability",
      polish: "przewidywalność",
    },
    value: data.predictability,
    unit: "%",
  },
  {
    name: {
      english: "humidity",
      polish: "wilgotność",
    },
    // name: "humidity",
    value: data.humidity,
    unit: "%",
  },
  {
    name: {
      english: "wind",
      polish: "wiatr",
    },
    // name: "wind",
    value: Math.round(data.wind_speed),
    unit: "km/h",
  },
  {
    name: {
      english: "air pressure",
      polish: "ciśnienie powietrza",
    },
    // name: "air pressure",
    value: data.air_pressure,
    unit: "mb",
  },
  {
    name: {
      english: "max temp",
      polish: "max temperatura",
    },
    // name: "max temp",
    value: Math.round(data.max_temp),
    unit: "°C",
  },
  {
    name: {
      english: "min temp",
      polish: "min temperatura",
    },
    // name: "min temp",
    value: Math.round(data.min_temp),
    unit: "°C",
  },
];

export const getCurrentDayForecast = (data, title) => ({
  weekdayPL: dayjs(data.applicable_date)
    .locale("pl")
    .format("dddd")
    .capitalize(),
  weekdayENG: dayjs(data.applicable_date).format("dddd").capitalize(),
  datePL: dayjs(data.applicable_date)
    .locale("pl")
    .format("MMMM D")
    .capitalize(),
  dateENG: dayjs(data.applicable_date).format("MMMM D"),
  location: title,
  temperature: Math.round(data.the_temp),
  weatherIcon: `'https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
  weatherDescription: data.weather_state_name,
});

export const getWeekdayPL = (date) =>
  dayjs(date).locale("pl").format("dddd").capitalize().substring(0, 3);

export const getWeekdayENG = (date) =>
  dayjs(date).format("dddd").substring(0, 3);

export const getUpcomingDaysForecast = (data) =>
  data.slice(1).map((day) => ({
    imgUrl: day.weather_state_abbr,
    temperature: Math.round(day.max_temp),
    weekdayPL: getWeekdayPL(day.applicable_date),
    weekdayENG: getWeekdayENG(day.applicable_date),
  }));
