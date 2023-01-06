<script>
import { toRefs, reactive } from "@vue/reactivity";
export default {
  data() {
    return {
      message: "hello App.vue",
    };
  },
  setup() {
    const message = "hello vue";
    const obj = reactive({
      name: "mike",
      age: 18,
      gender: "man",
    });
    function changeObjName() {
      this.obj.name = "sam";
    }
    function changeAll() {
      this.obj.name = "sam";
      this.obj.age = 28;
      this.obj.gender = "woman";
    }
    //...obj可以将obj进行解构
    //...obj解构后将失去响应式，需要用toRefs()来恢复响应式
    return { message, obj, changeObjName, changeAll, ...toRefs(obj) };
  },
};
</script>
<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ obj.name }}</p>
    <h2>---</h2>
    <button @click="changeObjName">Change obj.name</button>
    <h2>---</h2>
    <p>name: {{ name }}</p>
    <p>age: {{ age }}</p>
    <p>gender: {{ gender }}</p>
    <button @click="changeAll">change all</button>
  </div>
</template>
<style></style>
