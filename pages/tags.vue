<script lang="ts" setup>
import { useLayout } from '~~/composables/layout';

const layout = useLayout();

</script>

<template>
  <NuxtLayout :name="layout">
    <div class="px-4 mx-auto pt-none pb-14 md:py-[54px]">
      <div class="flex flex-col items-center">
        <ClientOnly>
          <TagList />
        </ClientOnly>
      </div>
    </div>
  </NuxtLayout>
</template>
