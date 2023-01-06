<script>
export default {
  data() {
    return {
      childMsg: "child message",
    };
  },
  props: ["propMsg"],
};
</script>
<template>
  <div>
    <h2>H2</h2>
    <p>{{ propMsg }}</p>
    <h2>------------</h2>
    <p>{{ this.$parent }}</p>
    <p>{{ this.$parent.message }}</p>
    <h2>------------</h2>
    <p>{{ this.$root }}</p>
  </div>
</template>
<style></style>
