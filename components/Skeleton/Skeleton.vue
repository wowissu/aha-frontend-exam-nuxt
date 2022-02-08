<script lang="ts" setup>

interface SkeletonProps {
  fit?: boolean;
  line?: boolean;
  round?: boolean;
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  fit: false,
  round: false,
  line: false,
  width: undefined,
  height: undefined
});

</script>

<template>
  <div
    class="bg-gradient-to-br from-greyscale-400 to-greyscale-500"
    :class="{
      'rounded-full': props.round,
      'rounded': !props.round,
      'w-full': props.fit || props.width === undefined,
      'h-full': props.fit || props.height === undefined,
      'h-2 inline-block': props.line,
    }"
    :style="{
      width: props.width,
      height: props.height
    }"
  >
    <slot name="default" />
  </div>
</template>