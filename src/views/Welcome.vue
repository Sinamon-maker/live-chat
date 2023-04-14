<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <LoginForm @login="enterChats" />
      <p>
        No account yet?
        <span @click="showLogin = false">Signup</span> instead
      </p>
    </div>
    <div v-else>
      <SignupForm @signup="enterChats" />
      <p>
        Already registered
        <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();
    const enterChats = () => {
      router.push({ name: "Chatroom" });
    };
    return { showLogin, enterChats };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
