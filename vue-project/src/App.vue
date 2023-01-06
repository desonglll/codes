<script>
export default {
  data() {
    return {
      message: "hello App.vue",
    };
  },
};
</script>
<template>
  <div>
    <h2>There is App.vue</h2>
    <router-link to="/detail">Click to go detail page.</router-link>
    <router-view></router-view>
  </div>
</template>
<style></style>
