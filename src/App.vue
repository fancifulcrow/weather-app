<template>
  <div class=" relative w-full h-screen font-Montserrat bg-slate-200">
    <SearchBar/>
    <div class="w-full h-full">
      <RouterView />
    </div>
    <NavigationBar/>

  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import SearchBar from "./components/SearchBar.vue";
</script>

<style lang="scss" scoped></style>