<script lang="ts" setup>
import { computed } from 'vue';

export interface BtnProps {
  tag?: 'a' | 'button' | 'div';
  outline?: boolean;
  round?: boolean;
}

const props = withDefaults(defineProps<BtnProps>(), {
  tag: 'button',
  outline: false,
  round: false
});

const colorPattern = computed(() => props.outline ? 'outline' : 'normal');
const isRoundedFull = computed(() => props.round);

</script>

<template>
  <component
    :is="props.tag"
    class="border border-white"
    :class="{
      'text-black bg-white hover:bg-black hover:text-white': colorPattern === 'normal',
      'text-white bg-black hover:bg-white hover:text-black': colorPattern === 'outline',
      'rounded': !isRoundedFull,
      'rounded-full': isRoundedFull
    }"
  >
    <slot name="default" />
  </component>
</template>