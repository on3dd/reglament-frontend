import { makeObservable, observable, action, runInAction } from 'mobx';

import { UserModel, Token } from '@reglament';

// import { login, logout } from '../../api/auth';

import { mockLogin, mockLogout } from '../../mocks/auth';

export default class UserStore {
  token: Token = null;
  fetching: boolean = false;

  constructor() {
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
      this.token = token;

      console.log('login this.token', this.token);
    });

    this.toggleFetching();
  }

  async logout() {
    this.toggleFetching();

    // await logout();

    await mockLogout();

    runInAction(() => {
      this.token = null;

      console.log('logout this.token', this.token);
    });

    this.toggleFetching();
  }

  private toggleFetching() {
    runInAction(() => {
      this.fetching = !this.fetching;

      console.log('this.fetching', this.fetching);
    });
  }
}
