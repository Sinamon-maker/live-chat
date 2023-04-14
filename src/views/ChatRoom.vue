<template>
  <div class="container">
    <NavBar />
    <ChatWindow />
    <NewChatRoom />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ChatWindow from "../components/ChatWindow.vue";
import NewChatRoom from "../components/NewChatForm.vue";
import { watchEffect } from "vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
export default {
  components: { NavBar, NewChatRoom, ChatWindow },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watchEffect(function () {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
