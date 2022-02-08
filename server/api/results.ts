import type { IncomingMessage } from 'http';
import { Result } from '~~/types/results';
import { useQuery } from 'h3';

const pic = [
  'https://picsum.photos/id/237/300/200',
  'https://picsum.photos/id/1074/300/200',
  'https://picsum.photos/id/190/300/200'
];

export default (req: IncomingMessage): Promise<Result[]> => {
  const query = useQuery(req);
  // const body = await useBody(req);
  const pageSize = +(query.pageSize as string);

  const data = Array<Result>(pageSize).fill({
    id: 1,
    image: '',
    title: 'This is a title',
    username: 'username'
  }).map((row, index) => ({
    ...row,
    image: pic[index % 3],
    id: index + 1
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};