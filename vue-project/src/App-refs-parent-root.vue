<script>
import RefsParentRoot from "./components/RefsParentRoot.vue";
export default {
  data() {
    return {
      message: "hello App.vue",
    };
  },
  mounted() {
    console.log(this.$refs.hello.childMsg);
  },
  components: {
    RefsParentRoot,
  },
};
</script>
<template>
  <div>
    <RefsParentRoot :propMsg="message" ref="hello"></RefsParentRoot>
    <!-- <p>{{ this.$refs.hello.propMsg }}</p> -->
  </div>
</template>
<style></style>
