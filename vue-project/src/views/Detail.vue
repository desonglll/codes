<template>
  <div>
    <h2>Detail Pages</h2>
    <button @click="goIndex">Go Index</button>
  </div>
</template>

<script>
export default {
  methods: {
    goIndex: function () {
      this.$router.push("/");
    },
  },
};
</script>
