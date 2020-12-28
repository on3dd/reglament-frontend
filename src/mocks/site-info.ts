import { SiteInfoModel } from '@reglament';

import { sleep } from '../utils/functions';

export const mockFetchSiteInfo = async (): Promise<SiteInfoModel> => {
  await sleep(1000);

  return {
    email: 'admartm@mail.primorye.ru',
    number: '8 (42337) 4-94-90',
    number_name:
      'справочная служба администрации Артёмовского городского округа',
    address: '692760, Приморский край, г.Артём, ул.Кирова, 48',
    reg_num: '',
    date: '',
    reg_author: 'Роскомнадзор',
    boss: 'Рабинович Элина Дмитриевна',
  };
};

export const mockUpdateSiteInfo = async (
  data: SiteInfoModel,
): Promise<SiteInfoModel> => {
  await sleep(1000);

  return data;
};
