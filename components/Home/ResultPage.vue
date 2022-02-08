<script lang="ts" setup>
import ArrowLeftSvg from '~~/assets/img/arrow-left.svg?raw';
import { Result } from '~~/types/results';

const { $api } = useNuxtApp();
const route = useRoute();
const resultsPageStack = ref<Record<string, Result[]>>({});
const results = computed(() => [].concat.apply([], Object.values(resultsPageStack.value)));

async function resolveQuery (to = route) {
  if (to.query && Object.values(to.query).length) {
    resultsPageStack.value = {};

    await loadMoreResults();
  }
}

async function loadMoreResults () {
  try {
    const query = route.query;
    const nextPageNum = Object.keys(resultsPageStack.value).length + 1;

    const { data } = await $api.useResultsFetcher({
      keyword: query.keyword as string,
      pageSize: parseInt(query.pageSize as string),
      page: nextPageNum
    });

    resultsPageStack.value[nextPageNum] = data.value;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

await resolveQuery();

</script>

<template>
  <div class="flex flex-col">
    <!-- header -->
    <div class="relative flex items-center py-[24px]">
      <!--  -->
      <div class="absolute right-[calc(100%+30px)] hidden md:block">
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
      <div v-for="result in results" :key="result.id">
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
</template>
