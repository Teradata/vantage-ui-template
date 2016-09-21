import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

// JIT compile long form
platformBrowserDynamic().bootstrapModule(AppModule);
