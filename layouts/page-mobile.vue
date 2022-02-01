<script lang="ts" setup>
import ArrowLeftSvg from '~~/assets/img/arrow-left.svg?raw';
import UnionSvg from '~~/assets/img/Union.svg?raw';
</script>

<template>
  <div class="min-h-screen w-screen flex flex-col">
    <div class="sticky top-0 h-[70px] px-[7px] bg-greyscale-200 z-50 flex items-center">
      <slot name="header">
        <div class="cursor-pointer text-white mx-[20px]" @click="$router.push('/')" v-html="ArrowLeftSvg" />
        <div class="text-2xl leading-[1.5]">
          Home Page
        </div>
      </slot>
    </div>

    <main class="flex-grow">
      <slot name="default">
        <!-- default slot -->
      </slot>
    </main>

    <div class="sticky bottom-0">
      <nav class="nav h-[66px] flex justify-center items-center">
        <div class="flex flex-row gap-x-[50px]">
          <NuxtLink v-slot="{ isActive, href }" to="/" custom>
            <MenuItem no-label :active="isActive" :href="href">
              <template #icon>
                <div v-html="UnionSvg" />
              </template>
            </MenuItem>
          </NuxtLink>
          <NuxtLink v-slot="{ isActive, href }" to="/tags" custom>
            <MenuItem no-label :active="isActive" :href="href" dot>
              <template #icon>
                <div v-html="UnionSvg" />
              </template>
            </MenuItem>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="css">
:root {
  /* define root vars for: assets/css/tailwind.css */
  --screen-bg-color: #181818;
  --screen-text-color: white;
}

.nav {
  background: rgba(24, 24, 24, 0.2);
  box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(54.3656px);
  height: 66px;
}
</style>
