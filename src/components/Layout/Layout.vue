<script setup lang="ts">

import { useAppStateStore } from '@/stores/AppStateStore'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const appStateStore = useAppStateStore()
const {isAuth} = storeToRefs(appStateStore)
const { logout } = appStateStore

const route = useRoute()
const pageName = computed(() => route.name)
</script>

<!--Я смотрел как делать настоящий Layout , мне впадлу-->
<template>
 <div class="bg-blue-100 p-10 mb-10 flex items-center">
   <div class="mr-auto">
     <span class="text-5xl">ХЕХЕХЕХЕХЕХЕХЕХЕХЕХ.</span>
     <div>Ты на странице: <b>{{pageName}}</b> </div>
     <div ><router-link class="text-blue-500 hover:text-blue-800" to="/">На главную</router-link></div>
   </div>
   <div v-if="isAuth" v-on:click="logout" class="text-blue-500 hover:text-blue-800 text-right">Выйти</div>
 </div>
</template>

<style scoped>

</style>