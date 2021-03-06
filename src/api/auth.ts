import { AxiosResponse } from 'axios';

import { UserModel, TokenModel } from '@reglament';

import axiosService from '../utils/axiosService';
import { API_ENDPOINTS } from '../utils/constants';

export const login = async (
  data: UserModel,
): Promise<AxiosResponse<TokenModel>> => {
  return await axiosService.post(API_ENDPOINTS.auth, data);
};

export const logout = async (): Promise<AxiosResponse<void>> => {
  return await axiosService.get(API_ENDPOINTS.auth);
};
