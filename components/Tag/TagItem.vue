<script lang="ts" setup>
import { Tag } from '~~/types/tags';

const props = defineProps<{ row: Tag }>();

</script>

<template>
  <div class="w-[150px]">
    <div class="aspect-square flex items-end bg-[#262626] rounded-[10px] px-[10px] py-[14px]">
      <div class="rounded-lg border-4 border-white px-[10px] text-2xl overflow-x-hidden overflow-ellipsis whitespace-nowrap max-w-full">
        {{ props.row.label }}
      </div>
    </div>
    <div class="py-[20px] lg:py-[12px] leading-[1.5]">
      <div class="text-[14.9px] tracking-[0.139688px]">
        {{ props.row.label }}
      </div>
      <div class="text-greyscale-400 text-[11.175px] tracking-[0.3725px]">
        {{ props.row.caption }}
      </div>
    </div>
  </div>
</template>