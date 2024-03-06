<template>
    <header class="sticky top-0 shadow-lg bg-primary">
        <nav class="container flex flex-row items-center gap-4 py-4 max-w-2xl">
            <RouterLink :to="{name: 'home'}">
                <div class="flex items-center gap-4 text-2xl">
                    <h1>The Weather App</h1>
                </div>
            </RouterLink>

            <div class="flex gap-4 flex-1 justify-end">
                <i class="fa-solid fa-circle-info text-xl hover:text-tertiary duration-150 cursor-pointer" @click="toggleModal"></i>

                <i class="fa-solid fa-plus text-xl hover:text-tertiary duration-150 cursor-pointer" @click="addCity" v-if="route.query.preview"></i>
            </div>
            <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
                <h1 class="text-2xl">About</h1>
                <p>
                    This app allows you to track current and future weather of cities all around the world.
                </p>
                <h1 class="text-2xl mt-4">
                    How it Works
                </h1>
                <p>
                    <ol class="list-decimal list-inside">
                        <li>Search for the city by entering its name into the search bar.</li>
                        <li>Select a city within the results, this will take you to the weather page for that city.</li>
                        <li>Track the city by clicking the '+' icon. This will save city to view at a later time on the home page.</li>
                        <li>If you no longer want to track a city, simply select the city on the home page. At the bottom of the page, there will be an option to remove the city. </li>
                    </ol>
                </p>
            </BaseModal>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import BaseModal from "./BaseModal.vue";
import { ref } from "vue";
import { uid } from "uid";

const modalActive = ref(null);
const toggleModal = () => {
    modalActive.value = !modalActive.value;
};

const savedCities = ref([]);
const route = useRoute();
const router = useRouter();

const addCity = () => {
    if (localStorage.getItem("savedCities")){
        savedCities.value = JSON.parse(localStorage.getItem("savedCities"));
    }

    const locationObj = {
        id: uid(),
        state: route.params.state,
        city: route.params.city,
        country: route.query.country,
        coords: {
            lat: route.query.lat,
            long: route.query.long,
        }
    };

    savedCities.value.push(locationObj);
    localStorage.setItem("savedCities", JSON.stringify(savedCities.value));

    let query = Object.assign({}, route.query);
    delete query.preview;
    query.id = locationObj.id;
    router.replace({ query });
};

</script>