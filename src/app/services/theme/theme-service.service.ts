import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>(this.getInitialTheme());
  theme$ = this.themeSubject.asObservable();

  constructor() {
    this.applyInitialTheme();
  }

  private getInitialTheme(): string {
    const themeMode = localStorage.getItem('theme');
    return themeMode === 'light' || themeMode === 'dark' ? themeMode : 'light';
  }

  private applyInitialTheme() {
    const currentTheme = this.getInitialTheme();
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    this.themeSubject.next(currentTheme);
  }

  getTheme(): string {
    return this.themeSubject.getValue();
  }

  toggleTheme() {
    const currentTheme = this.getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    this.themeSubject.next(newTheme);
  }
}
