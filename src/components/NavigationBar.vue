<template>
    <div class="absolute bottom-0 flex justify-center items-center w-full h-16 bg-white">
        <div class="box-width h-full flex justify-between items-center">
            <div>
                <RouterLink to="/">
                    <span>Home</span>
                </RouterLink>
            </div>
            <div>
                <h1>Locations</h1>
            </div>
            <div>
                <RouterLink to="/about">
                    <span>About</span>
                </RouterLink>
            </div>
            <div>
                <span>Settings</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss" scoped>

</style>