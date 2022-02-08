<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import useFollowerStore from '~~/store/followers.store';

const tab = ref<'Followers' | 'Following'>('Followers');
const followerStore = useFollowerStore();
const { followers, following } = storeToRefs(followerStore);

</script>

<template>
  <div class="flex flex-col h-full items-stretch">
    <div class="h-[65px]">
      <Tabs v-model="tab">
        <TabsTab name="Followers">
          Followers
        </TabsTab>
        <TabsTab name="Following">
          Following
        </TabsTab>
      </Tabs>
    </div>
    <div class="flex-1 flex-grow overflow-y-auto">
      <div class="py-6">
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
  </div>
</template>