<script setup lang="ts">
import type { Post } from '@/api/models/posts'

defineProps<{ data: Post }>()
</script>

<template>
  <div class="p-4 bg-stone-300 border-stone-500">
    <div>
      Author: {{ data.id }}
    </div>
    <div class="mt-1 text-lg font-bold">
      {{data.title}}
    </div>
    <div class="mt-2">
      {{data.body}}
    </div>
  </div>
</template>

<style scoped>

</style>