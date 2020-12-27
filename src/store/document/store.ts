import { makeObservable, observable, action, runInAction } from 'mobx';

import { Document, DocumentDraft } from '@reglament';

// import { createDocument } from '../../api/document';

import { mockCreateDocument } from '../../mocks/document';

export default class DocumentStore {
  document: Document = null;
  fetching: boolean = false;

  constructor() {
    makeObservable(this, {
      document: observable,
      fetching: observable,
      createDocument: action,
    });
  }

  async createDocument(data: DocumentDraft) {
    this.toggleFetching();

    // const { data: document } = await createDocument(data);

    const document = await mockCreateDocument(data);

    runInAction(() => {
      this.document = document;

      console.log('createDocument this.document', this.document);
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
