import { makeObservable, observable, action, runInAction } from 'mobx';

import { SiteInfoModel } from '@reglament';

// import { fetchSiteInfo, updateSiteInfo } from '../../api/site-info';

import {
  mockFetchSiteInfo,
  mockUpdateSiteInfo,
} from '../../mocks/site-info';

export default class SiteInfoStore {
  info: SiteInfoModel = {
    email: '',
    number: '',
    number_name: '',
    address: '',
    reg_num: '',
    date: '',
    reg_author: '',
    boss: '',
  };

  fetching: boolean = false;

  constructor() {
    makeObservable(this, {
      info: observable,
      fetching: observable,
      fetchSiteInfo: action,
      updateSiteInfo: action,
    });
  }

  async fetchSiteInfo() {
    this.toggleFetching();

    // const { data: info } = await fetchSiteInfo();

    const info = await mockFetchSiteInfo();

    runInAction(() => {
      this.info = info;

      console.log('fetchSiteInfo this.info', this.info);
    });

    this.toggleFetching();
  }

  async updateSiteInfo(data: SiteInfoModel) {
    this.toggleFetching();

    // const { data: info } = await updateSiteInfo(data);

    const info = await mockUpdateSiteInfo(data);

    runInAction(() => {
      this.info = info;

      console.log('createSiteInfo this.info', this.info);
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
