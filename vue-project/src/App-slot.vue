<script>
import Slot from "./components/Slot.vue";

export default {
  data() {
    return {
      message: "Hello App.vue",
    };
  },

  components: {
    Slot,
  },
};
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <!-- 测试默认slot -->
    <h2>Test default slot</h2>
    <Slot></Slot>
    <!-- 测试覆盖slot -->
    <h2>Test overwrite slot</h2>
    <Slot><input type="text" name="" id="" /></Slot>
    <!-- 测试具名插槽 -->
    <h2>Test</h2>
    <Slot>
      <template v-slot:s1>
        <button>Replace s1</button>
      </template>
      <template v-slot:s2>
        <button>Replace s2</button>
      </template>
      <template v-slot:s3>
        <button>Replace s3</button>
      </template>
    </Slot>
    <!-- 测试作用域插槽 -->
    <div>
      <Slot>
        <template v-slot:default="SlotProps">
          <ul>
            <li v-for="item in SlotProps.list" :key="item">{{ item }}</li>
          </ul>
        </template>
      </Slot>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
