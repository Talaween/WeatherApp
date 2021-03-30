
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
    apiKey: 'ada591dec3864456afe2c2ff2ebe6805',

}