<script setup lang="ts">
import * as yup from "yup";
import { useRegisterStore } from '@/store/RegisterStore'
import { storeToRefs } from 'pinia'
import {Form, ErrorMessage, Field } from 'vee-validate'

const registerStore = useRegisterStore()
const {loading, error} = storeToRefs(registerStore)
const {register} = registerStore;
console.log(register, loading)
const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required!")
    .min(3, "Must be at least 3 characters!")
    .max(20, "Must be maximum 20 characters!"),
  email: yup
    .string()
    .required("Email is required!")
    .email("Email is invalid!")
    .max(50, "Must be maximum 50 characters!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(6, "Must be at least 6 characters!")
    .max(40, "Must be maximum 40 characters!"),
});
</script>

<template>
  <div class="col-md-12">
    {{JSON.stringify(error)}}
    <div class="card card-container">
      <Form @submit="register" :validation-schema="schema">
          <div class="form-group">
            <label for="email">Email</label>
            <Field name="email" type="email" class="form-control" />
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <Field name="password" type="password" class="form-control" />
            <ErrorMessage name="password" class="error-feedback" />
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Sign Up
            </button>
          </div>
      </Form>

      <div
        v-if="error"
        class="alert"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>