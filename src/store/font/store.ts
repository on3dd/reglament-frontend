import { makeObservable, observable, action, toJS } from 'mobx';

import { Font, FontDraft } from '@reglament';

const DEFAULT_FONT: Font = {
  fontSize: 14,
  lineHeight: 1.1,
};

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
      ...DEFAULT_FONT,
      ...JSON.parse(font),
    };
  }

  private setFont(font: FontDraft) {
    const f1 = toJS(this.font);
    const f2 = toJS(font);

    this.font = { ...f1, ...f2 };

    localStorage.setItem('font', JSON.stringify(this.font));
  }
}
