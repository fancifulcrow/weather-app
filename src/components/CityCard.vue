<template>
    <div class="flex py-6 px-3 rounded-md cursor-pointer border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary duration-150">
        <div class="flex flex-col flex-1">
            <h2 class="text-2xl">{{ city.city }}</h2>
            <h3>{{ city.state }}, {{ city.country }}</h3>
        </div>

        <div class="flex flex-col gap-2">
            <p class="text-3xl self-end">
                {{ Math.round(city.weather.current.temperature_2m) }}&deg;
            </p>
            <div>
                <p v-html="getWeatherIcon(city.weather.current.weather_code, city.weather.current.is_day)" class="self-end text-3xl"></p>
            </div>
        </div>
    </div>
</template>

<script setup>
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

defineProps({
    city: {
        type: Object,
        default: () => {},
    }
});
</script>