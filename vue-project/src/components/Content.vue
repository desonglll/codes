<script>
export default {
  data() {
    return {
      message: "hello content",
    };
  },
  inject: ["Appmessage", "tips", "obj"],
};
</script>
<template>
  <div>{{ message }}</div>
  <div>{{ tips }}</div>
  <div>{{ obj }}</div>
</template>
<style></style>
