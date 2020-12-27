import { AxiosResponse } from 'axios';

import { DocumentDraft, DocumentModel } from '@reglament';

import axiosService from '../utils/axiosService';
import { API_ENDPOINTS } from '../utils/constants';

export const createDocument = async (
  draft: DocumentDraft,
): Promise<AxiosResponse<DocumentModel>> => {
  const token = localStorage.getItem('token');

  const data = new FormData();

  data.append('name', draft.name);
  data.append('number', draft.number);
  data.append('date', draft.placed_at);
  data.append('type', draft.type.toString());
  data.append('agency', draft.agency.toString());
  data.append('is_project', draft.is_project.toString());

  if (draft.file) {
    data.append('file', draft.file, draft.file.name);
  }

  return await axiosService.post(API_ENDPOINTS.documents, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    params: {
      token,
    },
  });
};
