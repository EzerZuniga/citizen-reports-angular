import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
} from '@angular/router';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Reportes Ciudadanos';
  loading = false;
  private routerSub?: Subscription;

  @HostBinding('class') hostClass = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Detect navigation events to show a top progress indicator
    this.routerSub = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.setLoading(true);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        // Slight delay to avoid flicker on fast navigations
        timer(120).subscribe(() => this.setLoading(false));
      }
    });

    // Apply saved theme preference if any
    const theme = localStorage.getItem('theme');
    this.applyTheme(theme === 'dark' ? 'dark' : 'light');
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  toggleTheme() {
    const next = this.hostClass === 'theme-dark' ? 'theme-light' : 'theme-dark';
    this.applyTheme(next === 'theme-dark' ? 'dark' : 'light');
  }

  private applyTheme(mode: 'dark' | 'light') {
    if (mode === 'dark') {
      this.hostClass = 'theme-dark';
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.hostClass = 'theme-light';
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
