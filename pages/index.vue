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
  <NuxtLayout :name="layout">
    <template #mobile-header>
      <LogoBox />
    </template>
    <template v-if="hasQuery">
      <HomeResultPage />
    </template>
    <template v-else>
      <HomeSearchPage />
    </template>
  </NuxtLayout>
</template>
