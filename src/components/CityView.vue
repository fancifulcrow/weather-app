<template>
    <div class="w-full h-screen flex flex-col items-center justify-center gap-4 mx-2">
        <div class="flex sm:flex-col justify-center items-center sm:text-center my-2 gap-8 sm:gap-0">
            <div class="w-32 h-32 sm:w-48 sm:h-48"><img src="../assets/cloudy.png" alt="cloudy"></div>
            <div class="">
                <div class="flex flex-row items-baseline sm:justify-center sm:text-center pt-4 pb-2">
                    <h1 class="text-5xl">32</h1>
                    <span class="text-xl">°C</span>
                </div>
                    <div class="">
                        <h2 class="uppercase text-lg colored-text-2">Abuja, FCT</h2>
                        <span class="colored-text-2">Cloudy</span>
                    </div>
            </div>
        </div>
        <div class="box-width h-32 bg-white rounded-lg grid grid-cols-3 shadow-lg">
            <div class="w-full h-full flex flex-col items-center justify-center">
                <div class="colored-text-1 text-center flex items-center flex-col">
                    <h1 class="text-3xl">61</h1>
                    <span class="uppercase">PERCENT</span>
                </div>
                <span class="colored-text-2 text-sm">Precipitation</span>
            </div>

            <div class="w-full h-full flex flex-col items-center justify-center border-x-2 border-slate-100">
                <div class="colored-text-1 text-center flex items-center flex-col">
                    <h1 class="text-3xl">78</h1>
                    <span class="uppercase">KMPH</span>
                </div>
                <span class="colored-text-2 text-sm">Wind</span>
            </div>

            <div class="w-full h-full flex flex-col items-center justify-center">
                <div class="colored-text-1 text-center flex items-center flex-col">
                    <h1 class="text-3xl">12</h1>
                    <span class="uppercase">PERCENT</span>
                </div>
                <span class="colored-text-2 text-sm">Humidity</span>
            </div>
        </div>
        <div class="box-width h-24 bg-white rounded-lg grid grid-cols-6 shadow-lg">

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>