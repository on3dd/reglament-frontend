import { SiteInfoModel } from '@reglament';

import { sleep } from '../utils/functions';

export const mockUpdateSiteInfo = async (
  data: SiteInfoModel,
): Promise<SiteInfoModel> => {
  await sleep(1000);

  return data;
};
