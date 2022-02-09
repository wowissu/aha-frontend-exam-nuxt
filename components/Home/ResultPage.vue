<script lang="ts" setup>
import { AsyncData } from 'nuxt3';
import ArrowLeftSvg from '~~/assets/img/arrow-left.svg?raw';
import { Result } from '~~/types/results';

const { $api } = useNuxtApp();
const route = useRoute();
const pageResultsStack = ref<Record<string, Result[]>>({});
const lastFetcher = ref<AsyncData<Result[]>>();
const results = computed(() => [].concat.apply([], Object.values(pageResultsStack.value)));
const resultsPending = computed(() => unref(unref(lastFetcher)?.pending) ?? false);

async function resolveQuery (to = route) {
  if (to.query && Object.values(to.query).length) {
    pageResultsStack.value = {};

    await loadMoreResults();
  }
}

async function loadMoreResults () {
  try {
    const query = route.query;
    const nextPageNum = Math.max(...Object.keys(pageResultsStack.value).map(k => +k), 0) + 1;

    const fetcher = $api.useResultsFetcher({
      keyword: query.keyword as string,
      pageSize: parseInt(query.pageSize as string),
      page: nextPageNum
    });

    lastFetcher.value = fetcher;

    const { data } = await fetcher;

    pageResultsStack.value = { ...pageResultsStack.value, [nextPageNum]: unref(data) };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

onMounted(() => {
  void resolveQuery();
});

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
      <!-- loading -->
      <template v-if="resultsPending">
        <div v-for="i in 3" :key="i">
          <ResultItemSkeleton />
        </div>
      </template>
    </div>
    <!-- more -->
    <div class="pt-16">
      <div v-if="!resultsPending" class="max-w-full sm:max-w-[343px]">
        <Btn full @click="loadMoreResults()">
          MORE
        </Btn>
      </div>
    </div>
  </div>
</template>
