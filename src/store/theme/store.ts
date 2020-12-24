import { makeObservable, observable, action } from 'mobx';

import { Theme, ReglamentTheme } from '@reglament';

import { THEMES } from '../../utils/constants';

export default class ThemeStore {
  theme: Theme;

  constructor() {
    this.theme = this.getTheme();

    makeObservable(this, {
      theme: observable,
      changeTheme: action,
    });
  }

  changeTheme(theme: ReglamentTheme) {
    this.setTheme(theme);
  }

  private getTheme(): Theme {
    const theme = localStorage.getItem('theme') as ReglamentTheme | null;

    switch (theme) {
      case 'dark':
        return THEMES.dark;

      case 'sepia':
        return THEMES.sepia;

      default:
        return THEMES.light;
    }
  }

  private setTheme(theme: ReglamentTheme) {
    this.theme = THEMES[theme];

    localStorage.setItem('theme', theme);
  }
}
