<script lang="ts" setup>

const { $api } = useNuxtApp();
const { data: tags, pending } = $api.useTagsFetcher({ lazy: true });

</script>

<template>
  <div>
    <div class="text-2xl lg:text-3xl leading-[1.5] py-[24px]">
      Tags
    </div>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
      <template v-if="pending">
        <div v-for="i in 10" :key="i" class="min-w-[150px]">
          <TagItemSkeleton />
        </div>
      </template>
      <template v-else>
        <div v-for="tag in tags" :key="tag.id" class="min-w-[150px]">
          <TagItem :row="tag" />
        </div>
      </template>
    </div>
  </div>
</template>