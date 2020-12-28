import { makeObservable, observable, action, runInAction } from 'mobx';

import { UserModel, Token, TokenModel } from '@reglament';

// import { login, logout } from '../../api/auth';

import { mockLogin, mockLogout } from '../../mocks/auth';

export default class UserStore {
  token: Token;
  error: string | null;
  fetching: boolean = false;

  constructor() {
    this.error = null;
    this.token = this.getToken();

    makeObservable(this, {
      token: observable,
      error: observable,
      fetching: observable,
      login: action,
    });
  }

  async login(data: UserModel) {
    try {
      this.toggleFetching();

      // const { data: token } = await login(data);

      const token = await mockLogin(data);

      runInAction(() => {
        this.setToken(token);
      });
    } catch (_: unknown) {
      this.error =
        'Что-то пошло не так. Проверьте логин и пароль или повторите попытку позже.';
    } finally {
      this.toggleFetching();
    }
  }

  async logout() {
    this.toggleFetching();

    // await logout();

    await mockLogout();

    runInAction(() => {
      this.removeToken();
    });

    this.toggleFetching();
  }

  private toggleFetching() {
    runInAction(() => {
      this.fetching = !this.fetching;
    });
  }

  private getToken() {
    return localStorage.getItem('token') as Token;
  }

  private removeToken() {
    this.token = null;

    localStorage.removeItem('token');
  }

  private setToken(token: TokenModel) {
    this.token = token;

    localStorage.setItem('token', token);
  }
}
