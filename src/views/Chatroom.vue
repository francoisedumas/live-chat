<template>
  <div class="container">
    <NavBar />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from '@vue/runtime-core'

export default {
  components: { NavBar },
  setup() {
    const { user } = getUser() 
    const router = useRouter()

    watch(user, ()  => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

<style>

</style>