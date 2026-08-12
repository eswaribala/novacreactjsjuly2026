import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { appConfig } from './app/app.config';
import { MarriageLoan } from './app/marriage-loan/marriage-loan';

createApplication(appConfig)
  .then(appRef => {

    const marriageLoanElement =
      createCustomElement(
        MarriageLoan,
        {
          injector: appRef.injector
        }
      );

    if (!customElements.get('marriage-loan')) {
      customElements.define(
        'marriage-loan',
        marriageLoanElement
      );
    }

  })
  .catch(err => console.error(err));