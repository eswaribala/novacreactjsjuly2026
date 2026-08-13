import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { appConfig } from './app/app.config';
import { Payment } from './app/payment/payment';

createApplication(appConfig)
  .then((appRef) => {

    const paymentElement = createCustomElement(
      Payment,
      {
        injector: appRef.injector
      }
    );

    if (!customElements.get('payment-mfe')) {
      customElements.define(
        'payment-mfe',
        paymentElement
      );
    }

  })
  .catch(err => console.error(err));
