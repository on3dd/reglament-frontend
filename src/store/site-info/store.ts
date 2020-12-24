import { makeObservable, observable, action, runInAction } from 'mobx';

import { SiteInfo, SiteInfoModel } from '@reglament';

import { mockUpdateSiteInfo } from '../../mocks/site-info';

export default class SiteInfoStore {
  document: SiteInfo = null;
  fetching: boolean = false;

  constructor() {
    makeObservable(this, {
      document: observable,
      fetching: observable,
      updateSiteInfo: action,
    });
  }

  async updateSiteInfo(data: SiteInfoModel) {
    this.toggleFetching();

    const document = await mockUpdateSiteInfo(data);

    runInAction(() => {
      this.document = document;

      console.log('createSiteInfo this.document', this.document);
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
