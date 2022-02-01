<script lang="ts" setup>
import { useLayout } from '~~/composables/layout';
import { Tag } from '~~/types/tags';

const { $api } = useNuxtApp();
const layout = useLayout();

const tags = ref<Tag[]>([]);

const res = await $api.fetchTags();

tags.value = res.data;

</script>

<template>
  <NuxtLayout :name="layout">
    <div class="px-4 mx-auto pt-none pb-14 md:py-[54px]">
      <div class="flex flex-col items-center">
        <div>
          <!-- header -->
          <div class="text-2xl lg:text-3xl leading-[1.5] py-[24px]">
            Tags
          </div>
          <!-- content -->
          <div class="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
            <div v-for="tag in tags" :key="tag.id" class="min-w-[150px]">
              <TagItem :row="tag" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
