import { enableProdMode, ErrorHandler, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, RouteReuseStrategy, withPreloading } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/pages/tabs/tabs.routes';

import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { ErrorService } from './app/shared/services/exceptionHandler.service';

if (environment.production) {
  enableProdMode();
}

const providers = [
  importProvidersFrom( IonicModule.forRoot({}) ),
  provideRouter(routes, withPreloading(PreloadAllModules)),
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  { provide: ErrorHandler, useClass: ErrorService, },
];

// Call the element loader before the bootstrapModule/bootstrapApplication call
defineCustomElements(window);

bootstrapApplication(AppComponent, { providers })
  .catch(err => console.log(err));

