import { Component, effect, inject, signal } from '@angular/core';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Region } from '@app/country/interfaces/regions.interface';
import { CountryService } from '@app/country/services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  imports: [CountryTableComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  public selectedRegion = signal<Region | ''>('');

  private countryService = inject(CountryService);

  public regionsResource = rxResource({
    defaultValue: [],
    request: () => ({ region: this.selectedRegion() }),
    loader: ({ request }) => {
      if (!request.region) return of([]);
      return this.countryService.searchByRegion(request.region);
    },
  });
}
