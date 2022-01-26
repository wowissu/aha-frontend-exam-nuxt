export interface Follower {
  avatar: string;
  fullname: string;
  username: string;
  isFollowing: boolean;
}

export function useFollowerMock (num: number) {
  const avatars = import.meta.globEager('/assets/img/avatars/*.png');
  const avatarUrls = Object.values(avatars).map(({ default: url }) => url);

  const mock: Follower[] = Array<Follower>(num).fill({
    avatar: '',
    fullname: 'Fullname',
    username: 'username',
    isFollowing: false
  }).map((row) => ({
    ...row,
    avatar: avatarUrls[Math.max(getRandomInt(avatarUrls.length - 1), 0)],
    isFollowing: getRandomInt(100) < 10
  }));

  return mock;
}

function getRandomInt (max: number) {
  return Math.floor(Math.random() * max);
}