<script lang="ts" setup>
import { ref, provide, readonly } from 'vue';
import { tabsProvideKey } from '~~/contexts/tabs.context';

interface TabProps {
  modelValue?: string
}

const props = defineProps<TabProps>();
const emits = defineEmits<{ (event: 'update:modelValue', val: string): void }>();
const activeName = ref<string>(props.modelValue);

function setActive (tabname: string) {
  activeName.value = tabname;

  emits('update:modelValue', activeName.value);
}

provide(tabsProvideKey, readonly({
  activeName,
  setActive
}));

</script>

<template>
  <div class="h-full w-full flex flex-nowrap items-stretch">
    <slot name="default" />
  </div>
</template>