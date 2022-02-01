import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Follower } from '~~/types/follower';
import { Result } from '~~/types/results';
import { Tag } from '~~/types/tags';

export default function useMock (apiInstance: AxiosInstance) {
  const mock = new MockAdapter(apiInstance);

  mock.onGet('/api/followers').reply(useFollowerMock());
  mock.onGet('/api/results').reply(useResultMock());
  mock.onGet('/api/tags').reply(useTagsMock());

  return {
    mock
  };
}

function getRandomInt (max: number) {
  return Math.floor(Math.random() * max);
}

function useFollowerMock () {
  return () => {
    const avatars = import.meta.globEager('/assets/img/avatars/*.png');
    const avatarUrls = Object.values(avatars).map(({ default: url }) => url);

    const followers: Follower[] = Array<Follower>(50).fill({
      avatar: '',
      fullname: 'Fullname',
      username: 'username',
      isFollowing: false
    }).map((row) => ({
      ...row,
      avatar: avatarUrls[Math.max(getRandomInt(avatarUrls.length - 1), 0)],
      isFollowing: getRandomInt(100) < 10
    }));

    return [200, followers];
  };
}

function useResultMock () {
  const pic = [
    'https://picsum.photos/id/237/300/200',
    'https://picsum.photos/id/1074/300/200',
    'https://picsum.photos/id/190/300/200'
  ];

  return () => {
    const data = Array<Result>(6).fill({
      id: 1,
      image: '',
      title: 'This is a title',
      username: 'username'
    }).map((row, index) => ({
      ...row,
      image: pic[index % 3],
      id: index + 1
    }));

    return [200, data];
  };
}

function useTagsMock () {
  return (): [200, Tag[]] => {
    return [200, [{
      'id': 1,
      'label': 'Yellow',
      'caption': '30 Results'
    }, {
      'id': 2,
      'label': 'Red',
      'caption': '30 Results'
    }, {
      'id': 3,
      'label': 'Mauv',
      'caption': '30 Results'
    }, {
      'id': 4,
      'label': 'Khaki',
      'caption': '30 Results'
    }, {
      'id': 5,
      'label': 'Indigo',
      'caption': '30 Results'
    }, {
      'id': 6,
      'label': 'Fuscia',
      'caption': '30 Results'
    }, {
      'id': 7,
      'label': 'Blue',
      'caption': '30 Results'
    }, {
      'id': 8,
      'label': 'Aquamarine',
      'caption': '30 Results'
    }, {
      'id': 9,
      'label': 'Purple',
      'caption': '30 Results'
    }, {
      'id': 10,
      'label': 'Red',
      'caption': '30 Results'
    }, {
      'id': 11,
      'label': 'Violet',
      'caption': '30 Results'
    }, {
      'id': 12,
      'label': 'Mauv',
      'caption': '30 Results'
    }, {
      'id': 13,
      'label': 'Green',
      'caption': '30 Results'
    }, {
      'id': 14,
      'label': 'Teal',
      'caption': '30 Results'
    }, {
      'id': 15,
      'label': 'Green',
      'caption': '30 Results'
    }, {
      'id': 16,
      'label': 'Green',
      'caption': '30 Results'
    }, {
      'id': 17,
      'label': 'Fuscia',
      'caption': '30 Results'
    }, {
      'id': 18,
      'label': 'Blue',
      'caption': '30 Results'
    }, {
      'id': 19,
      'label': 'Crimson',
      'caption': '30 Results'
    }, {
      'id': 20,
      'label': 'Purple',
      'caption': '30 Results'
    }, {
      'id': 21,
      'label': 'Goldenrod',
      'caption': '30 Results'
    }, {
      'id': 22,
      'label': 'Indigo',
      'caption': '30 Results'
    }, {
      'id': 23,
      'label': 'Mauv',
      'caption': '30 Results'
    }, {
      'id': 24,
      'label': 'Khaki',
      'caption': '30 Results'
    }, {
      'id': 25,
      'label': 'Turquoise',
      'caption': '30 Results'
    }, {
      'id': 26,
      'label': 'Indigo',
      'caption': '30 Results'
    }, {
      'id': 27,
      'label': 'Violet',
      'caption': '100 Questions'
    }, {
      'id': 28,
      'label': 'Teal',
      'caption': '100 Questions'
    }, {
      'id': 29,
      'label': 'Red',
      'caption': '100 Questions'
    }, {
      'id': 30,
      'label': 'Teal',
      'caption': '100 Questions'
    }]];
  };
}