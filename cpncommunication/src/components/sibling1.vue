<template>
  <!-- 兄弟组件传值：事件总线方法 -->
  <div>
    <button @click="submitData">点击发送</button>
    <h1>sibling1</h1>
  </div>
</template>
<script>
// 导入事件总线
import { bus } from "../main";
export default {
  name: "sibling1",
  data() {
    return {
      mes: "我是子组件1发送给兄弟组件的数据"
    };
  },
  methods: {
    submitData() {
      // 触发点击事件时,通过$emit向兄弟组件传递值;
      bus.$emit("handle", this.mes);
    }
  },
  destroyed() {
    bus.$off("handle"); // 组件销毁之前销毁监听事件
  }
};
</script>
