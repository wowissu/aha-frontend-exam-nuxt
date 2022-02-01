import { defineNuxtPlugin } from '#app';
import axios, { AxiosInstance } from 'axios';
import useMock from '~~/composables/mock';
import { Follower } from '~~/types/follower';
import { Result, ResultQueryString } from '~~/types/results';
import { Tag } from '~~/types/tags';

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: '/',
    timeout: 1000
  });

  const apiService = new ApiServices(instance);

  return {
    provide: {
      api: apiService
    }
  };
});

class ApiServices {
  constructor (public instance: AxiosInstance) {
    useMock(instance);
  }

  public fetchFollowers () {
    return this.instance.get<Follower[]>('/api/followers');
  }

  public fetchResults (query: ResultQueryString) {
    return this.instance.get<Result[]>('/api/results', { params: query });
  }

  public fetchTags () {
    return this.instance.get<Tag[]>('/api/tags');
  }
}