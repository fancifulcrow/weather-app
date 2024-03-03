<template>
  <div class="font-Montserrat flex flex-col min-h-screen bg-blue-200 text-blue-700">
    <SiteNavigation/>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from './components/SiteNavigation.vue';
</script>