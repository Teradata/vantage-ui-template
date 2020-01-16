import { Injectable, Renderer2, Inject, RendererFactory2 } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

const THEME_LOCAL_STORAGE_KEY: string = 'vantage.theme';
const DARK_THEME: string = 'dark-theme';
const LIGHT_THEME: string = 'light-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _renderer2: Renderer2;
  activeTheme: string = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

  constructor(@Inject(DOCUMENT) private _document: any, private rendererFactory: RendererFactory2) {
    this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
    const subscription: Subscription = fromEvent(window, 'storage')
      .pipe(filter((event: StorageEvent) => event.key === THEME_LOCAL_STORAGE_KEY))
      .subscribe((event: StorageEvent) => this.applyTheme(event.newValue));
  }

  public get darkThemeIsActive(): boolean {
    return this.activeTheme === DARK_THEME;
  }
  public get lightThemeIsActive(): boolean {
    return this.activeTheme === LIGHT_THEME;
  }

  public applyLightTheme(): void {
    this.applyTheme(LIGHT_THEME);
  }
  public applyDarkTheme(): void {
    this.applyTheme(DARK_THEME);
  }
  private applyTheme(theme: string): void {
    this._renderer2.removeClass(this._document.querySelector('body'), theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
    this._renderer2.addClass(this._document.querySelector('body'), theme);
    this.activeTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
  }
}
