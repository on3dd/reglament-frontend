import { makeObservable, observable, action } from 'mobx';

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
    const font = localStorage.getItem('font') || '';

    return font
      ? JSON.parse(font)
      : {
          fontSize: 14,
          lineHeight: 1.1,
        };
  }

  private setFont(font: FontDraft) {
    this.font = { ...this.font, ...font };

    localStorage.setItem('font', JSON.stringify(font));
  }
}
