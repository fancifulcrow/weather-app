<template>
    <div class="container max-w-2xl">
        <Suspense>
            <AsyncCityView/>
            <template #fallback>
                <p>loading...</p>
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import AsyncCityView from '@/components/AsyncCityView.vue';


</script>
