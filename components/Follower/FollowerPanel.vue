<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import useFollowerStore from '~~/store/followers.store';
import FollowerItemSkeleton from '~~/components/Follower/FollowerItemSkeleton.vue';

const scrollWrapperRef = ref<HTMLDivElement>();
const tab = ref<'Followers' | 'Following'>('Followers');
const followerStore = useFollowerStore();
const { followers, following, pending: followersPending } = storeToRefs(followerStore);

void followerStore.fetch();

function onScroll () {
  const el = scrollWrapperRef.value;

  if (!el) return;

  const scrollBottom = el.scrollHeight - (el.scrollTop + el.offsetHeight);

  if (scrollBottom <= 0) {
    void followerStore.fetchMore();
  }
}

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
    <div ref="scrollWrapperRef" class="flex-1 flex-grow overflow-y-auto" @scroll="onScroll">
      <div class="py-6">
        <TabPanels v-model="tab">
          <TabPanel name="Followers">
            <div class="flex flex-wrap">
              <FollowerItem v-for="(follower, index) in followers" :key="index" :follower="follower" />
              <template v-if="followersPending">
                <FollowerItemSkeleton />
                <FollowerItemSkeleton />
              </template>
            </div>
          </TabPanel>
          <TabPanel name="Following">
            <div class="flex flex-wrap">
              <FollowerItem v-for="(follower, index) in following" :key="index" :follower="follower" />
              <template v-if="followersPending">
                <FollowerItemSkeleton />
                <FollowerItemSkeleton />
              </template>
            </div>
          </TabPanel>
        </TabPanels>
      </div>
    </div>
  </div>
</template>