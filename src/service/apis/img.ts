import { createQuery } from 'react-query-kit';

import ApiService from '..';

export const getSingleImg = () => {
  return ApiService.get<{ url: string }>('https://api.waifu.pics/sfw/waifu', {
    extraConfig: { showLoading: false },
    baseUrl: '',
  });
};

export const useSingleImg = createQuery<{ url: string }, void>({
  primaryKey: 'getSingleImg',
  queryFn: () =>
    ApiService.get('https://api.waifu.pics/sfw/waifu', {
      extraConfig: { showLoading: false },
      baseUrl: '',
    }),
  useDefaultOptions() {
    return {
      onSuccess(data) {
        console.log('test');
      },
    };
  },
});
