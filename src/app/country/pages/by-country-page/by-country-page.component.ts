import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountrySearchComponent } from '../../components/country-search/country-search.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CountryService } from '@app/country/services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [CountrySearchComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  countryService = inject(CountryService);
  query = signal<string>('');
  router = inject(Router);

  activatedRoute = inject(ActivatedRoute);

  q$ = linkedSignal(
    () => this.activatedRoute.snapshot.queryParamMap.get('q') ?? ''
  );

  countryResource = rxResource({
    defaultValue: [],
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);

      this.router.navigate(['/country/by-country'], {
        queryParams: {
          q: request.query,
        },
      });
      return this.countryService.searchByCountry(request.query);
    },
  });
}
