<script>
import Home from "./components/Home.vue";
export default {
  data() {
    return {
      message: "hello App.vue",
      // 响应式传obj
      obj: {
        message: "hello obj",
      },
    };
  },
  provide() {
    return {
      Appmessage: this.message,
      obj: this.obj,
      tips: "this is tips.",
    };
  },
  components: {
    Home,
  },
};
</script>
<template>
  <div>
    <p>{{ obj }}</p>
    <button @click="obj.message = 'hi obj'">Change obj</button>
    <h2>---</h2>
    <Home></Home>
  </div>
</template>
<style></style>
