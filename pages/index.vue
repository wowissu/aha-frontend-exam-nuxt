<script lang="ts" setup>
definePageMeta({
  layout: false,
  transition: false
});

const layout = useLayout();
const route = useRoute();

const hasQuery = computed(() => !!Object.keys(route.query).length);

</script>

<template>
  <NuxtLayout :name="layout" main-class="flex flex-col">
    <template v-if="!hasQuery" #mobile-header>
      <LogoBox />
    </template>
    <template v-if="hasQuery">
      <HomeResultPage
        class="min-h-full max-w-[calc(725px+2rem)] mx-auto px-5 pb-5 md:py-[54px]"
        :class="{
          'flex-1 w-full': $device.isMobile
        }"
      />
    </template>
    <template v-else>
      <HomeSearchPage
        class="min-h-full max-w-[calc(725px+2rem)] mx-auto px-5 pb-5 md:py-[54px]"
        :class="{
          'flex-1 w-full': $device.isMobile
        }"
      />
    </template>
  </NuxtLayout>
</template>
