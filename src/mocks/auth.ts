import { UserModel } from '@reglament';

import { sleep } from '../utils/functions';

export const mockLogin = async (data: UserModel): Promise<UserModel> => {
  await sleep(1000);

  return data;
};

export const mockLogout = async (): Promise<void> => {
  await sleep(1000);
};
