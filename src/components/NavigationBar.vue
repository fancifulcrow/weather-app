<template>
    <div class="absolute bottom-0 flex justify-center items-center w-full h-16 bg-white text-xl shadow-xl">
        <div class="box-width px-4 h-full flex justify-between items-center">
            <div>
                <RouterLink to="/">
                    <span><i class="fa-solid fa-house"></i></span>
                </RouterLink>
            </div>
            <div>
                <RouterLink to="/savedlocations">
                    <span><i class="fa-solid fa-location-dot"></i></span>
                </RouterLink>
            </div>
            <div>
                <RouterLink to="/about">
                    <span><i class="fa-solid fa-circle-info"></i></span>
                </RouterLink>
            </div>
            <div>
                <RouterLink to="/settings">
                    <span><i class="fa-solid fa-gear"></i></span>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss" scoped>

</style>