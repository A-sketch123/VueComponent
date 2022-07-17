<template>
  <div id="app" class="main">
    <h1>父组件</h1>
    <textarea class="content" type="text" v-model="text" />
    <!-- v-model动态绑定数据 -->
    <p></p>
    <button @click="send">
      点击发送输入数据
    </button>
    <!-- 法一：中央事件总线，使用方法同兄弟组件传值 -->
    <!-- 法二：provide / inject -->
    <!-- 法三：$attrs/ $listeners -->
    <son  :message="message" :propsdata="propsdata" v-on:grandsonData ="grandsonData"></son>
  </div>
</template>

<script>
import son from "./components/son";
//使用事件总线
import {bus}from "./main";
export default {
  name: "App",
  components: {
    son
  },
  data() {
    return {
      text: "",
      propsdata:'通过pros传递的值不在$attrs上',
      message: {
        info: ""
      }
    };
  },
  methods: {
    send() {
      this.message.info = this.text;
      bus.$emit("eventBus", this.text);
    },
    // 孙组件传值给父组件
    grandsonData(obj){
        console.log('获得孙组件的值：'+obj);
    }
  },

//    法二:父级组件提供provide函数给子孙后代传值
//   传入一个对象使provide变为响应式的
    provide(){
      return {
          //直接传入某个变量值(这里为text)做不到响应式,改变输入框的值后代组件接收的值不改变
          // fatherTxet:this.text
          //传入message对象做到响应式开发
          fatherTxet:this.message

      }
    }
};
</script>

<style scoped>
.main {
  width: 500px;
  margin: auto;
}
.content {
  width: 250px;
  height: 150px;
  background-color: #ecf2f7;
}
</style>
