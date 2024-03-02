<template>
    <header class="sticky top-0 shadow-lg">
        <nav class="container flex flex-row items-center gap-4 py-4 max-w-2xl">
            <RouterLink :to="{name: 'home'}">
                <div class="flex items-center gap-4 text-2xl">
                    <h1>The Weather App</h1>
                </div>
            </RouterLink>

            <div class="flex gap-4 flex-1 justify-end">
                <i class="fa-solid fa-circle-info text-xl hover:text-white duration-150 cursor-pointer" @click="toggleModal"></i>

                <i class="fa-solid fa-plus text-xl hover:text-white duration-150 cursor-pointer"></i>
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
import { RouterLink } from "vue-router";
import BaseModal from "./BaseModal.vue";
import { ref } from "vue";

const modalActive = ref(null);
const toggleModal = () => {
    modalActive.value = !modalActive.value;
};

</script>