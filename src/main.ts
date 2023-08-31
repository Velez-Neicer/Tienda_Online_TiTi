import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Si la aplicación está en modo de producción, habilita el modo de producción
if (environment.production) {
  enableProdMode();
}

// Inicia la aplicación cargando el módulo principal (AppModule)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
