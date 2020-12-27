import { AxiosResponse } from 'axios';

import { DocumentDraft, DocumentModel } from '@reglament';

import axiosService from '../utils/axiosService';
import { API_ENDPOINTS } from '../utils/constants';

export const createDocument = async (
  data: DocumentDraft,
): Promise<AxiosResponse<DocumentModel>> => {
  return await axiosService.post(API_ENDPOINTS.documents, data);
};
