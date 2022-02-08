import { defineStore } from 'pinia';

export const useFollowerStore = defineStore('followers', () => {
  const { $api } = useNuxtApp();
  const followerAsyncData = $api.useFollowersFetcher();
  const { data: followers } = followerAsyncData;
  const following = computed(() => followers.value.filter(row => row.isFollowing));

  return {
    followers,
    following,
    refresh: followerAsyncData.refresh
  };
});

export default useFollowerStore;
