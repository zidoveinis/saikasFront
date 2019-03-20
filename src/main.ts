import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CurrentFxRatesModule } from './app/rates/current-fx-rates.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CurrentFxRatesModule)
  .catch(err => console.error(err));
