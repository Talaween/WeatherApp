
export interface IWeatherAppConfig {
    appAvatar : string;
    cities : Array<string>;
    countryCode: Array<string>;
    apiKey: string;
}

export const AppConfig:IWeatherAppConfig = {
    appAvatar: 'https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/weather-icon.png',
    cities: [
        'London', 
        'New York',
        'Mumbai',
        'Sydney',
        'Tokyo',
    ],
    countryCode: [
        'UK', 
        'US',
        'IN',
        'AU',
        'JP',
    ],
    apiKey: '09bc4c48c3a740e983f52f036270109a',
}

export enum AppState {
    currentWeather,
    forecastWeather,
};