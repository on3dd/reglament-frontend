import { makeObservable, observable, action, runInAction } from 'mobx';

import { SearchDraft, DocumentModel } from '@reglament';

import { mockSearch } from '../../mocks/search';

export default class DocumentStore {
  result: DocumentModel[] = [];
  fetching: boolean = false;

  constructor() {
    makeObservable(this, {
      result: observable,
      fetching: observable,
      search: action,
    });
  }

  async search(data: SearchDraft) {
    this.toggleFetching();

    const result = await mockSearch(data);

    runInAction(() => {
      this.result = result;

      console.log('search this.result', this.result);
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
