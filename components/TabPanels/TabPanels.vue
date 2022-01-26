<script lang="ts" setup>
import { ref, useSlots, VNode, watchEffect } from 'vue';

interface TabProps {
  modelValue: string
}

const props = defineProps<TabProps>();
const slots = useSlots();
const activeSlot = ref<VNode>();

watchEffect(() => {
  activeSlot.value = slots.default().find((slot) => {
    return slot.props.name === props.modelValue;
  });
});

</script>

<template>
  <component :is="activeSlot" :key="props.modelValue" />
</template>