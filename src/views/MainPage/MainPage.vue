<script setup lang="ts">

import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes()
</script>

<template>
  Список страниц
  <div v-for="route in routes" :key="route.name">
    <router-link class="text-blue-500 hover:text-blue-800" :to="route.path">{{route.name}}</router-link>
  </div>
</template>

<style scoped>

</style>