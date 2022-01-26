<script lang="ts" setup>
import { ref, computed } from 'vue';
import UnionSvg from '~~/assets/img/Union.svg?raw';
import userFollowers from '~~/store/followers.store';
import FollowerItem from '~~/components/FollowerItem.vue';

const tab = ref<'Followers' | 'Following'>('Followers');

const { followers } = userFollowers();

const following = computed(() => followers.filter(row => row.isFollowing));

</script>

<template>
  <div class="bg-black text-white h-screen w-screen flex flex-row items-stretch justify-between">
    <PageNav>
      <template #menu>
        <NuxtLink v-slot="{ isActive, href }" to="/" custom>
          <MenuItem label="Home" :active="isActive" :href="href">
            <template #icon>
              <div v-html="UnionSvg" />
              <!-- <img src="assets/img/Union.svg" alt=""> -->
            </template>
          </MenuItem>
        </NuxtLink>
        <NuxtLink v-slot="{ isActive, href }" to="/tags" custom>
          <MenuItem label="Tags" :active="isActive" :href="href">
            <template #icon>
              <div v-html="UnionSvg" />
              <!-- <img src="assets/img/Union.svg" alt=""> -->
            </template>
          </MenuItem>
        </NuxtLink>
      </template>
    </PageNav>

    <main class="flex-grow">
      <slot name="default">
        <!-- default slot -->
      </slot>
    </main>

    <PageAside>
      <div class="h-[65px]">
        <Tabs v-model="tab">
          <TabsTab name="Followers">
            Followers
          </TabsTab>
          <TabsTab name="Following">
            Following
          </TabsTab>
        </Tabs>
        <div class="pt-6">
          <TabPanels v-model="tab">
            <TabPanel name="Followers">
              <div class="flex flex-wrap">
                <FollowerItem v-for="(follower, index) in followers" :key="index" :follower="follower" />
              </div>
            </TabPanel>
            <TabPanel name="Following">
              <div class="flex flex-wrap">
                <FollowerItem v-for="(follower, index) in following" :key="index" :follower="follower" />
              </div>
            </TabPanel>
          </TabPanels>
        </div>
      </div>
    </PageAside>
  </div>
</template>

<style lang="css">
:root {
  /* define root vars for: assets/css/tailwind.css */
  --screen-bg-color: #181818;
  --screen-text-color: white;
}

.logo {
  text-transform: uppercase;
	background: linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%);
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
