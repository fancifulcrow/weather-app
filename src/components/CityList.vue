<template>
    <div v-for="city in savedCities" :key="city.id">
        <CityCard :city="city" @click="goToCityView(city)"/>
    </div>

    <p v-if="savedCities.length === 0" class="text-center mt-12">No location saved.</p>
</template>

<script setup>
import axios from "axios";
import { ref } from 'vue';
import { useRouter } from "vue-router";
import CityCard from "./CityCard.vue";

const savedCities = ref([]);
const getCities = async () => {
    if (localStorage.getItem("savedCities")) {
        savedCities.value = JSON.parse(localStorage.getItem("savedCities"));
    }

    const requests = [];
    savedCities.value.forEach(city => {
        requests.push(
            axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${city.coords.lat}&longitude=${city.coords.long}&current=temperature_2m,is_day,weather_code&timezone=auto&forecast_days=1`)
        );
    });

    const weatherData = await Promise.all(requests);

    weatherData.forEach((value, index) => {
        savedCities.value[index].weather = value.data;
    });
};

await getCities();

const router = useRouter();
const goToCityView = (city) => {
    router.push({
        name: "cityView",
        params: {state: city.state, city: city.city},
        query: {
            id: city.id,
            long: city.coords.long,
            lat: city.coords.lat,
            country: city.country,
        }
    })
}

</script>

