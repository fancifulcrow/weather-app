<template>
  <div class="font-Montserrat flex flex-col min-h-screen bg-primary text-secondary">
    <SiteNavigation/>
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component v-bind:is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from './components/SiteNavigation.vue';
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: 600ms ease all;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}
</style>