import { makeObservable, observable, action, runInAction } from 'mobx';

import { SearchDraft, DocumentModel } from '@reglament';

// import { search } from '../../api/search';

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

    // const { data: result } = await search(data);

    const result = await mockSearch(data);

    runInAction(() => {
      this.result = result;
    });

    this.toggleFetching();
  }

  private toggleFetching() {
    runInAction(() => {
      this.fetching = !this.fetching;
    });
  }
}
