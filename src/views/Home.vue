<template>
  <el-button type="primary" size="default" @click="counterStore.increment">
    <span>按钮</span>
  </el-button>
  <div>{{ count }}</div>
  <div>{{ doubleCount }}</div>
  <div>
    <el-auto-resizer>
      <div style="color: red">111111111111111111</div>
    </el-auto-resizer>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
counterStore.$patch({
  count: 20,
});
</script>

<style scoped></style>
