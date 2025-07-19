import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountrySearchComponent } from '@app/country/components/country-search/country-search.component';
import { CountryTableComponent } from '@app/country/components/country-table/country-table.component';
import { CountryService } from '@app/country/services/country.service';
import { of } from 'rxjs';

@Component({
  imports: [CountrySearchComponent, CountryTableComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);
  query = signal<string>('');

  countryResource = rxResource({
    defaultValue: [],
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);
      return this.countryService.searchByCapital(request.query);
    }
  })
}
