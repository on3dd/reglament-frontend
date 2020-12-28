import { makeObservable, observable, action, runInAction } from 'mobx';

import { UserModel, Token, TokenModel } from '@reglament';

// import { login, logout } from '../../api/auth';

import { mockLogin, mockLogout } from '../../mocks/auth';

export default class UserStore {
  token: Token;
  fetching: boolean = false;

  constructor() {
    this.token = this.getToken();

    makeObservable(this, {
      token: observable,
      fetching: observable,
      login: action,
    });
  }

  async login(data: UserModel) {
    this.toggleFetching();

    // const { data: token } = await login(data);

    const token = await mockLogin(data);

    runInAction(() => {
      this.setToken(token);
    });

    this.toggleFetching();
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
