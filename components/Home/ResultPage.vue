<script lang="ts" setup>
import ArrowLeftSvg from '~~/assets/img/arrow-left.svg?raw';
import { Result } from '~~/types/results';
import { onBeforeRouteUpdate } from 'vue-router';

const { $api } = useNuxtApp();
const route = useRoute();
const resultsPageStack = ref<Record<string, Result[]>>({});
const results = computed(() => [].concat.apply([], Object.values(resultsPageStack.value)));

onBeforeRouteUpdate(async (to, from, next) => {
  await resolveQuery(to);

  next();
});

async function resolveQuery (to = route) {
  if (to.query && Object.values(to.query).length) {
    resultsPageStack.value = {};

    await loadMoreResults();
  }
}

async function loadMoreResults () {
  const query = route.query;
  const nextPageNum = Object.keys(resultsPageStack.value).length + 1;
  const res = await $api.fetchResults({
    keyword: query.keyword as string,
    pageSize: parseInt(query.pageSize as string),
    page: nextPageNum
  });

  resultsPageStack.value[nextPageNum] = res.data;
}

await resolveQuery();

</script>

<template>
  <div class="max-w-[calc(725px+2rem)] px-4 mx-auto pt-none pb-14 md:py-[54px]">
    <div class="flex flex-col">
      <!-- header -->
      <div class="relative flex items-center py-[24px]">
        <!--  -->
        <div class="absolute right-[calc(100%+30px)]">
          <NuxtLink :to="{ path: '/' }">
            <div class="cursor-pointer text-white" v-html="ArrowLeftSvg" />
          </NuxtLink>
        </div>
        <div class="text-2xl lg:text-3xl leading-[1.5]">
          Results
        </div>
      </div>
      <!-- List -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-y-4 gap-x-[34px]">
        <div v-for="result in results" :key="result.id" class="">
          <ResultItem :row="result" />
        </div>
      </div>
      <!-- more -->
      <div class="pt-16">
        <div class="max-w-full sm:max-w-[343px]">
          <Btn full @click="loadMoreResults()">
            MORE
          </Btn>
        </div>
      </div>
    </div>
  </div>
</template>
