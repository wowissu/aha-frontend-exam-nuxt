import { defineStore } from 'pinia';
import { Follower } from '~~/types/follower';

export const useFollowerStore = defineStore('followers', () => {
  const followers = ref<Follower[]>([]);
  const following = computed(() => followers.value.filter(row => row.isFollowing));

  async function updateFollowers () {
    const { $api } = useNuxtApp();

    const res = await $api.fetchFollowers();

    followers.value = res.data;
  }

  return {
    followers,
    following,
    updateFollowers
  };
});

export default useFollowerStore;
