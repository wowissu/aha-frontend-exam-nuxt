<script lang="ts" setup>
import { ref, useSlots, VNode, watchEffect } from 'vue';

interface TabProps {
  modelValue: string
}

const props = defineProps<TabProps>();
const slots = useSlots();
const activeNode = ref<VNode>();
const prevNode = ref<VNode>();

watchEffect(() => {
  prevNode.value = activeNode.value;

  activeNode.value = slots.default().find((slot) => {
    return slot.props.name === props.modelValue;
  });
});

</script>

<template>
  <div>
    <component :is="activeNode" :key="props.modelValue" />
  </div>
</template>