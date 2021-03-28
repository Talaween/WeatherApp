
export interface IWeatherAppConfig {
    appAvatar : String;
    cities : Array<String>;

}

export const appConfig:IWeatherAppConfig = {
    appAvatar: 'https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/weather-icon.png',
    cities: [
        'London', 
        'New York',
        'Mumbai',
        'Sydney',
        'Tokyo',
    ],

}