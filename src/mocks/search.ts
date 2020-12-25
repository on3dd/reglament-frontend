import { SearchDraft, DocumentModel } from '@reglament';

import { sleep } from '../utils/functions';

export const mockSearch = async (
  _: SearchDraft,
): Promise<DocumentModel[]> => {
  await sleep(1000);

  return new Array(100).fill(0).map((_, idx) => ({
    id: idx + 1,
    type: 'Постановление',
    name:
      'О мерах по укреплению пожарной безопасности на осенне-зимний период 2020-2021 годов ',
    agency: 'АГО',
    number: '490-па',
    placed_at: '15.10.2020',
    created_at: '15.10.2020',
  }));
};
