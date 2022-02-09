import { AsyncData } from 'nuxt3';
import { defineStore } from 'pinia';
import { Follower } from '~~/types/follower';

export const useFollowerStore = defineStore('followers', () => {
  const { $api } = useNuxtApp();

  const lastFetcher = ref<AsyncData<Follower[]>>();
  const followers = ref<Follower[]>([]);
  const following = computed(() => unref(followers).filter(row => row.isFollowing));
  const pending = computed(() => unref(unref(lastFetcher)?.pending) ?? false);

  async function fetch () {
    followers.value = [];

    return fetchMore();
  }

  async function fetchMore () {
    const fetcher = $api.useFollowersFetcher();

    lastFetcher.value = fetcher;
    followers.value = [ ...followers.value, ...unref((await fetcher).data) ];
  }

  return {
    followers,
    following,
    pending,
    fetch,
    fetchMore
  };
});

export default useFollowerStore;
