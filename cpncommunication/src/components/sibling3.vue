<template>
  <div>
    <button @click="btnClick">点击传值给子组件4</button>
    <h2>我是组件3，要传值给兄弟组件4</h2>
  </div>
</template>
<script>
export default {
  name: "sibling3",
  data() {
    return {
      mes: "我是组件3传给组件4的数据"
    };
  },
  methods: {
    btnClick() {
      this.$emit("sibing3click", this.mes);
    }
  }
};
</script>
