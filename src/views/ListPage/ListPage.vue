<script setup lang="ts">

import { useListStore } from '@/views/ListPage/ListStore'
import { storeToRefs } from 'pinia'
import ListItem from '@/views/ListPage/components/ListItem/ListItem.vue'
import { onMounted } from 'vue'

const listStore = useListStore();
const {listFiltered, filters, error, loading} = storeToRefs(listStore)
const {getPosts} = listStore
onMounted(() => {
  getPosts()
})

</script>

<template>
  <div class="w-1/2 m-auto mb-6">
    <h1>Фильтр(содержание, заголовок)</h1>
    <input v-model="filters.search" name="search" type="text" class="input w-full">
  </div>
  <div class="list m-auto w-1/2">
    <ListItem v-for="item in listFiltered" :data="item" :key="item.id" />
    <div v-if="!listFiltered.length">Пустота..(</div>
    <div v-if="error" class="text-red-600">Ошибка</div>
    <div v-if="loading">Загрузка...</div>
  </div>
</template>

<style scoped>
.list {
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>