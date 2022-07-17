<template>
  <div>
    <!-- 法一：provide / inject -->
    <!-- <grandson></grandson> -->

    <!-- 法二：中央事件总线，使用方法同兄弟组件传值 -->
    <!-- <grandson2></grandson2> -->

    <!-- 法三：使用$attrs/ $listeners -->
    <!-- 传递父组件的值和事件给孙组件 -->
    <grandson3 v-bind="$attrs" v-on="$listeners"></grandson3>
  </div>
</template>
<script>
import grandson from "./grandson.vue";
import grandson2 from "./grandson2.vue";
import grandson3 from "./grandson3.vue";
export default {
  name: "son",
  components: {
    grandson,
    grandson2,
    grandson3
  },
  props:['propsdata']
};
</script>
