<template>
    <div class="flex flex-col flex-1 items-center">
        <div v-if="route.query.preview" class="p-4 w-full text-center bg-blue-700 text-blue-200">
            <p>You are currently previewing the city, click the "+" icon to start tracking this city.</p>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from "vue-router";

const route = useRoute();

const getWeatherData = async () => {
    try {
        const weatherData = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${route.query.lat}&longitude=${route.query.long}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`)

        return weatherData;
    } catch(err){
        console.log(err);
    }
};

const weatherData = await getWeatherData();
console.log(weatherData);
</script>