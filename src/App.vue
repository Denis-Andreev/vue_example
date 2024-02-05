<script setup lang="ts">
import Layout from '@/components/Layout/Layout.vue'
import { onMounted } from 'vue'
import { useAppStateStore } from '@/stores/AppStateStore'

const appStateStore = useAppStateStore()
onMounted(() => {
  appStateStore.checkAuth()
})
</script>

<template>
  <Layout>
    <slot></slot>
  </Layout>
  <RouterView />
</template>

<style scoped>
</style>
