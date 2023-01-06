<script>
export default {
  data() {
    return {
      msg: "message from Slot.vue",
      defMsg: "default solt message.",
      list: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>
<template>
  {{ msg }}
  <slot>
    <p>{{ defMsg }}</p>
  </slot>
  <!-- 测试具名插槽 -->
  <slot name="s1"></slot>
  <slot name="s2"></slot>
  <slot name="s3"></slot>
  <!-- 测试插槽作用域 -->
  <slot :list="list"></slot>
</template>
<style></style>
