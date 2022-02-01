<script lang="ts" setup>

interface MenuItemProps {
  label?: string;
  href: string;
  active?: boolean;
  dot?: boolean;
}

const props = withDefaults(defineProps<MenuItemProps>(), {
  label: '',
  active: false,
  dot: false
});

</script>

<template>
  <a class="flex flex-col items-center justify-center group" :href="props.href" :class="{ 'text-disable': !active }">
    <div class="relative">
      <slot name="icon"><!-- icon --></slot>

      <!-- notify dot -->
      <template v-if="props.dot">
        <div class="absolute bottom-full left-full rounded-full bg-secondary-notify w-[7px] h-[7px] z-10" />
      </template>
    </div>
    <div v-if="props.label" class="text-xs leading-4.5">
      <div class="group-hover:visible" :class="{ 'invisible': !props.active }">
        {{ props.label }}
      </div>
    </div>
  </a>
</template>