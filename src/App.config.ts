
export interface IWeatherAppConfig {
    appAvatar : string;
    cities : Array<string>;
    countryCode: Array<string>;
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
    ]
}

export enum AppState {
    currentWeather,
    forecastWeather,
};