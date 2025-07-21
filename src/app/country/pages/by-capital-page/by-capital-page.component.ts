import { Component, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
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

      this.router.navigate(['/country/by-capital'], {
        queryParams: {
          q: request.query,
        },
      });

      return this.countryService.searchByCapital(request.query);
    },
  });
}
