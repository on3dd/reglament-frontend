import { AxiosResponse } from 'axios';

import { SiteInfoModel } from '@reglament';

import axiosService from '../utils/axiosService';
import { API_ENDPOINTS } from '../utils/constants';

export const fetchSiteInfo = async (): Promise<
  AxiosResponse<SiteInfoModel>
> => {
  return await axiosService.get(API_ENDPOINTS.site_info);
};

export const updateSiteInfo = async (
  data: SiteInfoModel,
): Promise<AxiosResponse<SiteInfoModel>> => {
  const token = localStorage.getItem('token');

  return await axiosService.put(API_ENDPOINTS.site_info, data, {
    params: {
      token,
    },
  });
};
