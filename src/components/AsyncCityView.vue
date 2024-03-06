<template>
    <div class="flex flex-col flex-1 items-center">
        <!-- Banner -->
        <div v-if="route.query.preview" class="p-4 w-full text-center bg-secondary text-primary">
            <p>You are currently previewing the city, click the "+" icon to start tracking this city.</p>
        </div>

        <!-- Weather Overview -->
        <div class="flex flex-col items-center py-8">
            <h1 class="text-4xl mb-2">{{ route.params.city }}</h1>
            <h2 class="uppercase">{{ route.params.state }}, {{ route.query.country}}</h2>
            <p class="text-sm mb-12">
                {{ 
                    new Date(utcDate.getTime() + (weatherData.utc_offset_seconds * 1000) - (timezoneOffset * 60 * 1000)).toLocaleDateString("en-GB",
                    {
                        weekday: "short",
                        day: "2-digit",
                        month: "long",
                    })
                }}, 
                {{
                    new Date(utcDate.getTime() + (weatherData.utc_offset_seconds * 1000) - (timezoneOffset * 60 * 1000)).toLocaleTimeString("en-GB",
                    {
                        timeStyle: "short",
                        hour12: false,
                    })
                }}
            </p>

            <p class="text-8xl mb-8">
                {{ Math.round(weatherData.current.temperature_2m) }}&deg;
            </p>

            <p>
                Feels like {{ Math.round(weatherData.current.apparent_temperature) }}&deg;
            </p>
            <p class="capitalize">
                {{ weatherCodes[weatherData.current.weather_code] }}
            </p>

            <div class="text-8xl mt-8" v-html="getWeatherIcon(weatherData.current.weather_code, weatherData.current.is_day)">
                
            </div>
        </div>

        <hr class="border-secondary border-opacity-40 border w-full max-w-2xl">

        <!-- Hourly Weather -->
        <div class="max-w-2xl w-full py-12">
            <div class="mx-8">
                <h2 class="mb-4">Hourly Weather</h2>
                <div class="flex gap-10 overflow-x-scroll py-2">
                    <div v-for="i in hoursRange" :key="i" class="flex flex-col gap-4 items-center pb-4">
                        <p>
                            {{ weatherData.hourly.time[i].split("T")[1] }}
                        </p>
                        <p v-html="getWeatherIcon(weatherData.hourly.weather_code[i], weatherData.hourly.is_day[i])" class="text-xl"></p>

                        <p>
                            {{ Math.round(weatherData.hourly.temperature_2m[i]) }}&deg;
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <hr class="border-secondary border-opacity-40 border w-full max-w-2xl">

        <!-- Weekly Weather -->
        <div class="max-w-2xl w-full py-12">
            <div class="mx-8">
                <h2 class="mb-4">7 Days Forcast</h2>
                <div v-for="i in daysRange" :key="i" class="flex items-center py-2">
                    <p class="flex-1">
                        {{
                            new Date(weatherData.daily.time[i]).toLocaleDateString("en-us", 
                            {
                                weekday: "long",
                            })
                        }}
                    </p>

                    <p v-html="getWeatherIcon(weatherData.daily.weather_code[i], 1)" class="text-xl">
                    </p>

                    <div class="flex flex-1 gap-2 justify-end">
                        <p>L: {{ Math.round(weatherData.daily.temperature_2m_min[i]) }}&deg;</p>
                        <p>H: {{ Math.round(weatherData.daily.temperature_2m_max[i]) }}&deg;</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Remove city -->
        <div class="flex items-center gap-2 py-12 cursor-pointer duration-15 hover:text-red-500" @click="removeCity" v-if="!route.query.preview">
            <i class="fa-solid fa-trash"></i>
            <p>Remove City</p>
        </div>

    </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const getWeatherData = async () => {
    try {
        const weatherData = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${route.query.lat}&longitude=${route.query.long}&current=temperature_2m,apparent_temperature,is_day,weather_code&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`)

        await new Promise((res) => setTimeout(res, 1000));
        return weatherData.data;
    } catch(err){
        console.log(err);
    }
};

const weatherData = await getWeatherData();
const utcDate = new Date();
const timezoneOffset = -utcDate.getTimezoneOffset();

const startIndex = new Date(utcDate.getTime() + (weatherData.utc_offset_seconds * 1000) - (timezoneOffset * 60 * 1000)).getHours() + 1;

const hoursRange = Array.from({length: 24}, (_, index) => startIndex + index);

const daysRange = Array.from({length: 6}, (_, index) => 1 + index);

const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing Rime fog",
    51: "Light Drizzle",
    53: "Moderate Drizzle",
    55: "Dense Drizzle",
    56: "Light Freezing Drizzle",
    57: "Dense Freezing Drizzle",
    61: "Slight Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",
    66: "Light Freezing Rain",
    67: "Heavy Freezing Rain",
    71: "Slight Snowfall",
    73: "Moderate Snowfall",
    75: "Heavy Snowfall",
    77: "Snow Grains",
    80: "Slight Rain Showers",
    81: "Moderate Rain Showers",
    82: "Violent Rain Showers",
    85: "Slight Snow Showers",
    86: "Heavy Snow Showers",
    95: "Slight or Moderate Thunderstorm",
    96: "Thunderstorm with Slight Hail",
    99: "Thunderstorm with Heavy Hail"
};

const getWeatherIcon = (weatherCode, is_day) => {
    switch (weatherCode){
        case 0:
        case 1:
            if (is_day === 1){
                return '<i class="fa-solid fa-sun"></i>';
            } else{
                return '<i class="fa-solid fa-moon"></i>';
            }
        
        case 2:
            if (is_day === 1){
                return '<i class="fa-solid fa-cloud-sun"></i>';
            } else{
                return '<i class="fa-solid fa-cloud-moon"></i>';
            }
        
        case 3:
            return '<i class="fa-solid fa-cloud"></i>';
        
        case 45:
        case 48:
            return '<i class="fa-solid fa-smog"></i>';
        
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
            if (is_day === 1){
                return '<i class="fa-solid fa-cloud-sun-rain"></i>';
            } else{
                return '<i class="fa-solid fa-cloud-moon-rain"></i>';
            }
        
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
        case 80:
        case 81:
        case 82:
            return '<i class="fa-solid fa-cloud-showers-heavy"></i>';
        
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return '<i class="fa-solid fa-snowflake"></i>';
        
        case 95:
        case 96:
        case 99:
            return '<i class="fa-solid fa-cloud-bolt"></i>';
        
        default:
            return '';
    }
};

const router = useRouter();
const removeCity = () => {
    const cities = JSON.parse(localStorage.getItem("savedCities"));
    const updatedCities = cities.filter((city) => {
        return city.id !== route.query.id;
    });

    localStorage.setItem("savedCities", JSON.stringify(updatedCities));

    router.push({
        name: "home",
    });
}

</script>