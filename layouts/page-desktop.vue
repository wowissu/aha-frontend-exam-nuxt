<script lang="ts" setup>
import UnionSvg from '~~/assets/img/Union.svg?raw';
</script>

<template>
  <div class="min-h-screen w-screen flex flex-row items-stretch justify-between">
    <!-- navbar -->
    <nav class="w-[80px] bg-greyscale-100 top-0 h-screen sticky">
      <div class="flex flex-col items-center gap-y-[20px]">
        <LogoBox />
        <div class="flex flex-col gap-y-6">
          <NuxtLink v-slot="{ isActive, href }" to="/" custom>
            <MenuItem label="Home" :active="isActive" :href="href">
              <template #icon>
                <div v-html="UnionSvg" />
              </template>
            </MenuItem>
          </NuxtLink>
          <NuxtLink v-slot="{ isActive, href }" to="/tags" custom>
            <MenuItem label="Tags" :active="isActive" :href="href" dot>
              <template #icon>
                <div v-html="UnionSvg" />
              </template>
            </MenuItem>
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- main -->
    <main class="flex-grow">
      <slot name="default">
        <!-- default slot -->
      </slot>
    </main>

    <!-- aside -->
    <aside class="w-[375px] bg-greyscale-100 h-screen top-0 right-0 sticky hidden lg:block">
      <ClientOnly>
        <FollowerPanel />
      </ClientOnly>
    </aside>
  </div>
</template>
