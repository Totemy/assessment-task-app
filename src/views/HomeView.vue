<template>
  <v-container>
    <LoginForm/>
  </v-container>
</template>
<script>
import LoginForm from '@/components/LoginForm.vue'
import GameComponent from '@/components/GameComponent.vue'
export  default {
  components:{
    GameComponent,
    LoginForm
  }
}
</script>