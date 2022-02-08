import { defineNuxtPlugin } from '#app';
import { ResultQueryString } from '~~/types/results';

export default defineNuxtPlugin(() => {
  const apiInstance = {
    useFollowersFetcher: () => useFetch('/api/followers'),
    useResultsFetcher: (query: ResultQueryString) => useFetch('/api/results', { params: query }),
    useTagsFetcher: () => useFetch('/api/tags')
  };

  return {
    provide: {
      api: apiInstance
    }
  };
});
