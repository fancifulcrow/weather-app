<template>
    <div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from "vue-router";

const route = useRoute();

const getWeatherData = async () => {
    try {
        const weatherData = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${route.query.lat}&longitude=${route.query.long}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`)

        const localTime = Date.now() + (weatherData.data.utc_offset_seconds * 1000);
        console.log(localTime);
        return weatherData;
    } catch(err){
        console.log(err);
    }
};

</script>