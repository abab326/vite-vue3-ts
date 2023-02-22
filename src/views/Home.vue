<template>
  <el-button type="primary" size="default" @click="counterStore.increment">
    <span>按钮</span>
  </el-button>
  <div>{{ count }}</div>
  <div>{{ doubleCount }}</div>
  <div>
    <el-auto-resizer>
      <svg-icon
        class-name="icon"
        icon="http://www.yygnb.com/demo/car.svg"
      ></svg-icon>
      <svg-icon class-name="icon" icon="aa"></svg-icon>
    </el-auto-resizer>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import SvgIcon from "@/components/SvgIcon/index.vue";
import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
counterStore.$patch({
  count: 20,
});
</script>

<style scoped lang="scss">
.icon {
  color: cornflowerblue;
  font-size: 30px;
}
</style>
