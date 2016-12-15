import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {enableProdMode} from '@angular/core';
const platform = platformBrowserDynamic();
//TODO: Check that it might go into the configuration for production deployment
//enableProdMode();
platform.bootstrapModule(AppModule)
.then(success => console.log('Bootstrap success'))
  .catch(err => console.error(err));

