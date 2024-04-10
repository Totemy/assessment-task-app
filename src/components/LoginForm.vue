<template>
        <v-card class="card__form">
          <v-card-text >
            <v-form v-model="isValid" @submit.prevent="loginUser" >
              <v-text-field
                v-model="userEmail"
                label="Email"
                :rules="[required, email]"
                required
              />

              <v-text-field
                v-model="password"
                label="Password"
                :rules="[required, minLength(6)]"
                type="password"
                required
              />

              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { useRouter } from 'vue-router'

const router = useRouter()
const userEmail = ref('')
const password = ref('')
const isValid = ref(false)

const rules = {
  userEmail: { required, email },
  password: { required, minLength: minLength(6) }
}

const v$ = useVuelidate(rules, { userEmail, password })

const loginUser = async () => {
  isValid.value = await v$.value.$validate()
  if (!isValid.value) {
    alert('Input error')
    return
  }
  router.push('/game')
}
</script>