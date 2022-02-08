<script lang="ts" setup>
import { Result } from '~~/types/results';

const props = defineProps<{ row: Result }>();
const imgReady = ref(false);

onMounted(() => {
  const img = new Image();

  img.addEventListener('load', () => {
    imgReady.value = true;
  });

  img.src = unref(props.row.image);
});

</script>

<template>
  <div>
    <div>
      <div class="w-full aspect-[219/146]">
        <template v-if="imgReady">
          <img class="w-full h-full object-cover" :src="props.row.image" :alt="props.row.title">
        </template>
        <template v-else>
          <Skeleton fit />
        </template>
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