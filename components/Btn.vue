<script lang="ts" setup>
import { computed } from 'vue';

export interface BtnProps {
  tag?: 'a' | 'button' | 'div';
  outline?: boolean;
  round?: boolean;
  full?: boolean,
  fit?: boolean,
  size?: 'xs' | 'md' | 'lg'
}

const props = withDefaults(defineProps<BtnProps>(), {
  tag: 'button',
  outline: false,
  round: false,
  full: false,
  fit: false,
  size: 'md'
});

const colorPattern = computed(() => props.outline ? 'outline' : 'normal');
const isRoundedFull = computed(() => props.round);

</script>

<template>
  <component
    :is="props.tag"
    class="inline-flex border border-white justify-center items-center"
    :class="{
      'text-greyscale-300 bg-white hover:bg-greyscale-300 hover:text-white': colorPattern === 'normal',
      'text-white bg-greyscale-300 hover:bg-white hover:text-greyscale-300': colorPattern === 'outline',
      // rounded
      'rounded': !isRoundedFull,
      'rounded-[20px]': isRoundedFull,
      // shrink
      'p-[5px] h-[40px]': props.size === 'md',
      'py-[5px] px-[10px] min-h-[29px] text-xs': props.size === 'xs',
      'min-h-[40px]': props.size === 'lg',
      // full fit
      'w-full': props.full || props.fit,
      'h-full': props.fit
    }"
  >
    <div class="leading-none">
      <slot name="default" />
    </div>
  </component>
</template>