import { UserModel, Token } from '@reglament';

import { sleep } from '../utils/functions';

export const mockLogin = async (_: UserModel): Promise<Token> => {
  await sleep(1000);

  return 'very_secret_token';
};

export const mockLogout = async (): Promise<void> => {
  await sleep(1000);
};
