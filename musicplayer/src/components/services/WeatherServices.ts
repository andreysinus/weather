import axios, { Axios, AxiosResponse } from "axios";
import { Weather } from "../store/types/types";

export class WeatherService{
    static getCurrentWeather(city: string): Promise <AxiosResponse <Weather>> {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29ebbbe577d440da0c62e0e24629b86c`)
    };
}