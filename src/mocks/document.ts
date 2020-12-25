import { DocumentDraft, DocumentModel } from '@reglament';

import { sleep } from '../utils/functions';

export const mockCreateDocument = async (
  data: DocumentDraft,
): Promise<DocumentModel> => {
  await sleep(1000);

  return {
    ...data,
    id: 1,
    created_at: new Date().toDateString(),
  };
};
