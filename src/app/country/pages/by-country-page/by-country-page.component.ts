import { Component, inject, signal } from '@angular/core';
import { CountrySearchComponent } from '../../components/country-search/country-search.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CountryService } from '@app/country/services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  imports: [CountrySearchComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  countryService = inject(CountryService);
  query = signal<string>('');

  countryResource = rxResource({
    defaultValue: [],
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);
      return this.countryService.searchByCountry(request.query)
    }
  })
}
