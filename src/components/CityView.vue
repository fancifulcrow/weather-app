<template>
    <!-- Card for the weather at a location -->
    <div class="rounded-xl w-full text-center p-8 border-black border-solid border-2">
        <div class="flex flex-col text-left">
            <span><i class="fa-solid fa-location-dot"></i> Berlin, Germany</span>
            <span>12:34</span>
        </div>
        
        <div class="flex items-center justify-between">
            <div class="flex flex-col text-left justify-start">
                <span class="text-5xl">30</span>
                <span>Slightly Cloudy</span>
            </div>
            <div>
                <div class="w-24 h-24">
                    <img src="../assets/cloudy.png" class="w-full h-full">
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>