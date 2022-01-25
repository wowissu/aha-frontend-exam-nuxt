<script lang="ts" setup>
import PageLayout from '~/layouts/PageLayout.vue';
import Btn from '~~/components/Btn.vue';
</script>

<template>
  <PageLayout>
    <div>
      <Btn>my btn</Btn>

      <Btn round>
        round button
      </Btn>

      <Btn outline>
        outline
      </Btn>
    </div>
  </PageLayout>
</template>
