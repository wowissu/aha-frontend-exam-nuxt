import { defineStore } from 'pinia';
import { Follower, useFollowerMock } from '~~/composables/follower';

export const userFollowers = defineStore('followers', () => {
  const followers = ref<Follower[]>([]);

  // make mock data
  followers.value = useFollowerMock(50);

  return {
    followers
  };
});

export default userFollowers;
