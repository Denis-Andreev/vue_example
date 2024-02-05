<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ErrorMessage, Field, useForm } from 'vee-validate'
import type { ApiRegisterPayload } from '@/api/models'
import { useRouter } from 'vue-router'
import type { RegisterFormValues } from '@/views/RegisterPage/types'
import { registerSchema } from '@/views/RegisterPage/helpers/register-schema'
import { useRegisterStore } from '@/views/RegisterPage/RegisterStore'

const registerStore = useRegisterStore()
const { loading, error } = storeToRefs(registerStore)
const { register } = registerStore
const router = useRouter()
const handleRegister = (data: ApiRegisterPayload) => {
  register({ data, onSuccess: () => router.push('/login') })
}

const { handleSubmit } = useForm<RegisterFormValues>({
  validationSchema: registerSchema
})
const onSubmit = handleSubmit(values => {
  handleRegister({...values, age: +values.age})
})
</script>

<template>
  <div>
    <div class="w-1/2 m-auto">
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
        <div class="mb-4">
          <label for="email">Почта</label>
          <Field name="email" type="email" class="input w-full" />
          <div class="mt-1 text-red-600 font-semibold text-xs">
            <ErrorMessage name="email" />
          </div>
        </div>
        <div class="mb-4">
          <label for="password">Паролик</label>
          <Field name="password" type="password" class="input w-full" />
          <div class="mt-1 text-red-600 font-semibold text-xs">
            <ErrorMessage name="password" />
          </div>
        </div>

        <div class="mt-2 ml-auto">
          <button type="submit" class="p-2 bg-amber-400 disabled:bg-stone-300" :disabled="loading">
            Регнуться
          </button>
        </div>
      </form>

      <div
        v-if="error"
        class="alert"
      >
        Возникла ошибка
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>