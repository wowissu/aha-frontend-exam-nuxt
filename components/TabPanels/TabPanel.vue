<script lang="ts" setup>
interface TabProps {
  name: string;
}

defineProps<TabProps>();
</script>

<template>
  <slot name="default" />
</template>