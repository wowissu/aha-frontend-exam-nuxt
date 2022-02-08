<script lang="ts" setup>
import { ResultQueryString } from '../../types/results';

const query = reactive<Omit<ResultQueryString, 'page'>>({
  keyword: '',
  pageSize: 9
});

</script>

<template>
  <div class="min-h-full max-w-[calc(725px+2rem)] px-4 mx-auto py-[54px]">
    <div class="flex flex-col justify-between">
      <div class="flex flex-col gap-y-[30px]">
        <section class="flex flex-col gap-y-5">
          <div class="text-2xl leading-[1.5] capitalize">
            Search
          </div>
          <div>
            <FormInput v-model="query.keyword" placeholder="Keyword" />
          </div>
        </section>
        <hr class="border-white border-opacity-10">
        <section class="flex flex-col gap-y-5">
          <div class="text-2xl leading-[1.5] capitalize">
            # of results per page
          </div>
          <div>
            <FormSlider v-model="query.pageSize" />
          </div>
        </section>
        <hr class="border-white border-opacity-10">
        <div class="mt-[300px]">
          <div class="max-w-full sm:max-w-[343px]">
            <NuxtLink v-slot="{ href }" :to="{ path: '/', query }" custom>
              <Btn tag="a" :href="href" full>
                SEARCH
              </Btn>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
