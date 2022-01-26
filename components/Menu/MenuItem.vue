<script lang="ts" setup>

interface MenuItemProps {
  label: string;
  href: string;
  active?: boolean;
}

const props = withDefaults(defineProps<MenuItemProps>(), {
  active: false
});

</script>

<template>
  <a class="flex flex-col items-center justify-center group" :href="props.href" :class="{ 'text-disable': !active }">
    <div>
      <slot name="icon"><!-- icon --></slot>
    </div>
    <div class="text-xs leading-4.5">
      <div class="group-hover:block" :class="{ 'block': props.active, 'hidden': !props.active }">
        {{ props.label }}
      </div>
    </div>
  </a>
</template>