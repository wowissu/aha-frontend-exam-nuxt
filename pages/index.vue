<script lang="ts" setup>
import PageLayout from '~~/layouts/PageLayout.vue';
</script>

<template>
  <PageLayout>
    <div class="flex flex-col gap-y-4 items-center">
      <Btn>my btn</Btn>

      <Btn size="xs" round>
        Button<br>Button
      </Btn>

      <Btn size="xs" round outline>
        Button
      </Btn>
    </div>
  </PageLayout>
</template>
