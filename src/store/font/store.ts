import { makeObservable, observable, action, toJS } from 'mobx';

import { Font, FontDraft } from '@reglament';

export default class FontStore {
  font: Font;

  constructor() {
    this.font = this.getFont();

    makeObservable(this, {
      font: observable,
      changeFont: action,
    });
  }

  changeFont(font: FontDraft) {
    this.setFont(font);
  }

  private getFont(): Font {
    const font = localStorage.getItem('font') || '{}';

    return {
      ...{
        fontSize: 14,
        lineHeight: 1.1,
      },
      ...JSON.parse(font),
    };
  }

  private setFont(font: FontDraft) {
    const f1 = toJS(this.font);
    const f2 = toJS(font);

    console.log('this.font before upd', f1);
    console.log('font before upd', f2);

    this.font = { ...f1, ...f2 };

    localStorage.setItem('font', JSON.stringify(this.font));
  }
}
