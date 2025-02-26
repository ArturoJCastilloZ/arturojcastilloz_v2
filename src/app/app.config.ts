import { ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { icons } from './icons-provider';
import { effectArray } from './state/effects';
import { metaReducers, ROOT_REDUCER } from './state/states/app.state';

registerLocaleData(es);

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideStore(ROOT_REDUCER, { metaReducers }),
        provideEffects(effectArray),
        provideHttpClient(),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
        provideNzIcons(icons),
        provideNzI18n(es_ES),
        importProvidersFrom(FormsModule),
        provideAnimationsAsync(),
        provideHttpClient()]
};
