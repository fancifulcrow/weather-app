<template>
    <div class="">
        <Suspense>
            <AsyncCityView/>
            <template #fallback>
                <div class="text-center mt-48">
                    <p class="text-xl">Loading... Please Wait</p>
                </div>
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import AsyncCityView from '@/components/AsyncCityView.vue';


</script>
