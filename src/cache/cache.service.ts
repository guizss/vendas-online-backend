import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager/dist/cache.constants';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}
  async getCache<T>(
    key: string,
    functionRequest: () => Promise<T>,
  ): Promise<T> {
    const cached: T = await this.cacheManager.get(key);

    if (cached) {
      return cached;
    }

    const isNotCached: T = await functionRequest();

    await this.cacheManager.set(key, isNotCached);

    return isNotCached;
  }
}
