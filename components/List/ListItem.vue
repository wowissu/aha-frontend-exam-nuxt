<script lang="ts" setup>

interface ListItemProps {
  avatar: string;
  label: string;
  caption?: string;
}

const props = defineProps<ListItemProps>();

</script>

<template>
  <div class="w-full px-4 py-2">
    <div class="flex flex-nowrap items-center">
      <div class="mr-4">
        <div class="border border-[#F8F8F8] rounded-[5px] w-[40px] h-[40px]">
          <img class="w-full h-full" :src="props.avatar" :alt="props.label">
        </div>
      </div>
      <div class="flex-1 leading-normal">
        <div class="tracking-[0.15px]">
          {{ props.label }}
        </div>
        <div class="text-greyscale-400 text-sm tracking-[0.25px]">
          {{ props.caption }}
        </div>
      </div>
      <div>
        <slot name="append" />
      </div>
    </div>
  </div>
</template>