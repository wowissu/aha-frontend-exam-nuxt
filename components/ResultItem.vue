<script lang="ts" setup>
import { Result } from '~~/types/results';

const props = defineProps<{ row: Result }>();

</script>

<template>
  <div>
    <div>
      <div class="w-full aspect-[219/146]">
        <img class="w-full h-full object-cover" :src="props.row.image" :alt="props.row.title">
      </div>
    </div>
    <div class="py-[20px] lg:py-[12px] leading-[1.5]">
      <div class="text-[14.9px] tracking-[0.139688px]">
        {{ props.row.title }}
      </div>
      <div class="text-white opacity-50 text-[11.175px] tracking-[0.3725px]">
        by {{ props.row.username }}
      </div>
    </div>
  </div>
</template>