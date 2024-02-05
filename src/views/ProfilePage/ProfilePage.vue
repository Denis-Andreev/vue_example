<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import { ErrorMessage, Field, useForm } from 'vee-validate'
import { profileSchema } from '@/views/ProfilePage/helpers/profile-schema'
import type { ProfileFormValues } from '@/views/ProfilePage/types'
import { onMounted, watchEffect } from 'vue'
import { decodeToken } from '@/api/helpers/token'
import { useProfileStore } from '@/views/ProfilePage/ProfileStore'
import { storeToRefs } from 'pinia'

const profileStore = useProfileStore()
const {getUserInfo} = profileStore
const {user, error} = storeToRefs(profileStore)
const toast = useToast();

onMounted(() => {
  const tokenInfo = decodeToken();
  if(!tokenInfo) {
    toast.add({severity: 'error', summary: 'Ты как сюда попал?????'})
  } else {
    getUserInfo(tokenInfo.userId)
  }
})
const { handleSubmit, resetForm } = useForm<ProfileFormValues>({
validationSchema: profileSchema,
})
watchEffect(() => {
  if(user && user.value) {
    resetForm({values: user.value})
  }
})
const onSubmit = handleSubmit(() => {
  console.log(toast, 'toast')
  Math.random() > 0.5
    ? toast.add({severity: 'success', summary: 'Успешно'})
    : toast.add({severity: 'error',summary: 'Чета пошло по пизде'})
})
</script>

<template>
  <Toast />
  <div>
    <div class="w-1/2 m-auto">
      <h1 class="text-xl mb-2">Профиль</h1>
      <form @submit="onSubmit">
        <div class="mb-4">
          <label for="name">Имя</label>
          <Field name="name" class="input w-full" />
          <div class="mt-1 text-red-600 font-semibold text-xs">
            <ErrorMessage name="name" />
          </div>
        </div>
        <div class="mb-4">
          <label for="age">Возраст</label>
          <Field name="age" class="input w-full" />
          <div class="mt-1 text-red-600 font-semibold text-xs">
            <ErrorMessage name="age" />
          </div>
        </div>

        <div class="mt-2 ml-auto">
          <button type="submit" class="p-2 bg-amber-400 disabled:bg-stone-300">
            Редактировать
          </button>
        </div>
      </form>

      <div
        v-if="error"
        class="alert"
      >
        Возникла ошибка загрузки данных
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>