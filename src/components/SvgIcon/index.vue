<template>
    <div
        v-if="isExteralIcon"
        :style="{ '--svg-icon-url': `url(${icon})` }"
        class="svg-icon svg-icon-online"
        :class="className"
    ></div>
    <svg v-else class="svg-icon" :class="className" aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`" />
    </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        default: "",
    },
});
/**
 *  判断是否为外部图标
 * @param path 图标路径
 *
 */
function exteralIcon(path: string) {
    return /^(http?:|https?:|mailto:|tel:)/.test(path);
}
const isExteralIcon = computed(() => exteralIcon(props.icon));
</script>

<style scoped lang="scss">
.svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
}
.svg-icon-online {
    background-color: currentColor;
    mask-image: var(--svg-icon-url);
    -webkit-mask-image: var(--svg-icon-url);
    mask-size: cover;
    -webkit-mask-size: cover;
    display: inline-block;
}
</style>
