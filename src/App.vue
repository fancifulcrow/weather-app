<template>
  <div class="relative">
    <div class="top-0 sticky p-8 flex justify-center items-center gap-8">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <RouterView/>
  </div>
</template>

<script setup>
import {RouterLink, RouterView} from "vue-router";
</script>

<style lang="scss" scoped>

</style>