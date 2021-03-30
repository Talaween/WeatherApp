export interface IWeather {
    dateTime: string;
    temperature: {
        temp: number;
        min: number;
        max: number;
    };
    state: string;
}

export interface ICity {
    name : string;
    countryCode: string;
    isLoading: boolean;
    currentWeather : IWeather | undefined;
    forecastWeather: Array<IWeather> | undefined;
    error?: string;
};