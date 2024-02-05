<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ErrorMessage, Field, useForm } from 'vee-validate'
import type { ApiLoginPayload } from '@/api/models'
import { useRouter } from 'vue-router'
import { useLoginStore } from '@/views/LoginPage/LoginStore'
import type { LoginFormValues } from '@/views/LoginPage/types'
import { loginSchema } from '@/views/LoginPage/helpers/login-schema'
import { useAppStateStore } from '@/stores/AppStateStore'

const loginStore = useLoginStore()
const appStateStore = useAppStateStore()
const { checkAuth } = appStateStore
const { loading, error } = storeToRefs(loginStore)
const { login } = loginStore
const router = useRouter()
const handleLogin = (data: ApiLoginPayload) => {
  login({
    data, onSuccess: () => {
      checkAuth()
      router.push('/profile')

    }
  })
}

const { handleSubmit } = useForm<LoginFormValues>({
  validationSchema: loginSchema
})
const onSubmit = handleSubmit(values => {
  handleLogin(values)
})
</script>

<template>
  <div>
    <div class="w-1/2 m-auto">
      <form @submit="onSubmit">
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
            Войти
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