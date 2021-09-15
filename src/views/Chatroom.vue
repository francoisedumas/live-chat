<template>
  <div class="container">
    <NavBar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import NavBar from '../components/NavBar.vue'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from '@vue/runtime-core'

export default {
  components: { NavBar, NewChatForm, ChatWindow },
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