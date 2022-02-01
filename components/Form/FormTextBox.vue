<script lang="ts" setup>
import { watch, ref } from 'vue';

interface FormInputProps {
  modelValue?: string;
  placeholder?: string;
}

const props = defineProps<FormInputProps>();
const emits = defineEmits<{ (event: 'update:modelValue', val: string): void }>();
const value = ref<string>();

watch(value, () => {
  emits('update:modelValue', value.value);
});

watch(() => props.modelValue, () => {
  if (props.modelValue !== value.value) {
    value.value = props.modelValue;
  }
});

</script>

<template>
  <div class="h-[60px]">
    <input
      v-model="value"
      type="text"
      class="w-full h-full rounded-md bg-transparent border-[3px] border-white border-opacity-50 outline-none px-[18px] focus:border-primary"
      :placeholder="props.placeholder"
    >
  </div>
</template>