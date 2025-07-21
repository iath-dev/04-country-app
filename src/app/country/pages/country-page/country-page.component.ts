import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CountryService } from '@app/country/services/country.service';
import { ErrorAlertComponent } from '@app/shared/components/error-alert/error-alert.component';
import { LoadingAlertComponent } from '@app/shared/components/loading-alert/loading-alert.component';
import { CountryInformationComponent } from './country-information/country-information.component';

@Component({
  imports: [
    ErrorAlertComponent,
    LoadingAlertComponent,
    CountryInformationComponent,
  ],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
  code = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['code'])),
    { initialValue: '' }
  );

  countryService = inject(CountryService);
  countryResource = rxResource({
    request: () => ({ code: this.code() }),
    loader: ({ request }) => {
      return this.countryService.searchCountryByAlpha(request.code);
    },
  });
}
