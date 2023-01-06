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
  <!--使用 router-link 组件进行导航 -->
  <!--通过传递 `to` 来指定链接 -->
  <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
  <div>
    <h1>Hello App!</h1>
    <p><router-link to="/">Go to Home</router-link></p>
    <p><router-link to="/about">Go to About</router-link></p>
    <router-view></router-view>
  </div>

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
</template>
<style></style>
