import { defineNuxtPlugin } from '#app';
import { ResultQueryString } from '~~/types/results';
import { AsyncDataOptions } from 'nuxt3';
import { Tag } from '~~/types/tags';

export default defineNuxtPlugin(() => {
  const apiInstance = {
    useFollowersFetcher: () => useFetch('/api/followers'),
    useResultsFetcher: (query: ResultQueryString) => useFetch('/api/results', { params: query }),
    useTagsFetcher: (opt?: AsyncDataOptions<Tag[]>) => useFetch('/api/tags', opt)
  };

  return {
    provide: {
      api: apiInstance
    }
  };
});
