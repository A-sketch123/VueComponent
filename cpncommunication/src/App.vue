<template>
  <div id="app">
    <!-- 法1：事件总线（sibling1与sibling2的通信）
    <child1></child1>
    <div style="margin:50px"></div>
    <child2></child2> -->

    <!-- 法二：子1传父,父传子2 -->
    <child3 @sibing3click="passclick"></child3>
    <div style="margin:50px"></div>
    <child4 :mes ='passmsg'></child4>
  </div>
</template>

<script>
import child1 from "./components/sibling1.vue";
import child2 from "./components/sibling2.vue";
import child3 from "./components/sibling3.vue";
import child4 from "./components/sibling4.vue";
export default {
  name: "App",
  data() {
    return {
      passmsg: ""
    };
  },
  components: {
    child1,
    child2,
    child3,
    child4
  },
  methods: {
    passclick(data) {
      this.passmsg = data;
      console.log(this.passmsg);
    }
  }
};
</script>

