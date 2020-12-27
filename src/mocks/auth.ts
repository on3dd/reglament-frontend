import { UserModel, TokenModel } from '@reglament';

import { sleep } from '../utils/functions';

export const mockLogin = async (_: UserModel): Promise<TokenModel> => {
  await sleep(1000);

  return 'very_secret_token';
};

export const mockLogout = async (): Promise<void> => {
  await sleep(1000);
};
