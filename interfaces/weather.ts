export type IWeatherConditions =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Clouds"
  | "Clear"
  | "Mist"
  | "Smoke"
  | "Haze"
  | "Dust"
  | "Fog"
  | "Sand"
  | "Dust"
  | "Ash"
  | "Squall"
  | "Tornad";

export type TWeather = [
  {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
];

export interface IWeather {
  data: {
    coord: {
      lon: number;
      lat: number;
    };
    weather: TWeather;
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  };
}
