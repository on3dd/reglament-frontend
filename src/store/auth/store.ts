import { makeObservable, observable, action, runInAction } from 'mobx';

import { User, UserModel } from '@reglament';

import { mockLogin, mockLogout } from '../../mocks/auth';

export default class UserStore {
  user: User = null;
  fetching: boolean = false;

  constructor() {
    makeObservable(this, {
      user: observable,
      fetching: observable,
      login: action,
    });
  }

  async login(data: UserModel) {
    this.toggleFetching();

    const user = await mockLogin(data);

    runInAction(() => {
      this.user = user;

      console.log('login this.user', this.user);
    });

    this.toggleFetching();
  }

  async logout() {
    this.toggleFetching();

    await mockLogout();

    runInAction(() => {
      this.user = null;

      console.log('logout this.user', this.user);
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
