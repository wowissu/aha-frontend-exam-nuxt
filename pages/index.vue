<script lang="ts" setup>
import { ResultQueryString } from '~~/types/results';
import { useLayout } from '~~/composables/layout';

const layout = useLayout();
const query = reactive<Omit<ResultQueryString, 'page'>>({
  keyword: '',
  pageSize: 30
});

</script>

<template>
  <NuxtLayout :name="layout">
    <template #header>
      <LogoBox />
    </template>
    <div class="min-h-full max-w-[calc(725px+2rem)] px-4 mx-auto py-[54px]">
      <div class="flex flex-col justify-between">
        <div class="flex flex-col gap-y-[30px]">
          <!--  -->
          <section class="flex flex-col gap-y-5">
            <div class="text-2xl leading-[1.5] capitalize">
              Search
            </div>
            <div>
              <FormTextBox v-model="query.keyword" placeholder="Keyword" />
            </div>
          </section>
          <hr class="border-white border-opacity-10">
          <section class="flex flex-col gap-y-5">
            <div class="text-2xl leading-[1.5] capitalize">
              # of results per page
            </div>
            <div>
              <FormSlider />
            </div>
          </section>
          <hr class="border-white border-opacity-10">
          <div class="mt-[300px]">
            <div class="max-w-full sm:max-w-[343px]">
              <NuxtLink v-slot="{ href }" :to="{ path: '/result', query }" custom>
                <Btn tag="a" :href="href" full>
                  SEARCH
                </Btn>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
