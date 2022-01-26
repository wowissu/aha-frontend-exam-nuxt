<script lang="ts" setup>
import { inject, computed } from 'vue';
import { tabsProvideKey, TabsContext } from '~~/contexts/tabs.context';

interface TabProps {
  name: string;
}

const props = defineProps<TabProps>();

const tabsContext = inject<TabsContext>(tabsProvideKey);
const actived = computed(() => props.name === tabsContext.activeName);

function onTabClick () {
  tabsContext.setActive(props.name);
}

</script>

<template>
  <div
    class="flex-1 self-end border-b-[2px]"
    :class="{
      'border-white text-white font-bold': actived ,
      'border-greyscale-50 text-greyscale-500': !actived
    }"
  >
    <div class="flex justify-center leading-5 p-[11px] cursor-pointer tracking-[0.15px]" @click.prevent="onTabClick">
      <slot name="default" />
    </div>
  </div>
</template>