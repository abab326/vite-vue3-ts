<template>
    <el-button type="primary" size="default" @click="counterStore.increment">
        <span>按钮</span>
    </el-button>
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
    <div>
        <svg-icon
            class-name="icon"
            icon="http://www.yygnb.com/demo/car.svg"
        ></svg-icon>
        <svg-icon class-name="icon" icon="aa"></svg-icon>
    </div>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import SvgIcon from "@/components/SvgIcon/index.vue";
import { useMouse } from "@vueuse/core";
import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();
const { x, y } = useMouse();
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
