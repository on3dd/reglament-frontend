import { AxiosResponse } from 'axios';

import { SearchDraft, DocumentModel } from '@reglament';

import axiosService from '../utils/axiosService';
import { API_ENDPOINTS } from '../utils/constants';

export const search = async (
  data: SearchDraft,
): Promise<AxiosResponse<DocumentModel[]>> => {
  return await axiosService.get(API_ENDPOINTS.documents, {
    params: { ...data },
  });
};
