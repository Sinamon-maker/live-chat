<template>
  <form>
    <textarea
      @keypress.enter.prevent="handleSubmit"
      v-model="message"
      placeholder="Type a message and hit enter to send..."
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { serverTimestamp } from "firebase/firestore";
export default {
  setup() {
    const { user } = getUser();
    const message = ref("");
    const { error, addDocument } = useCollection("messages");
    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: serverTimestamp(),
      };
      await addDocument(chat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { message, handleSubmit, error };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
