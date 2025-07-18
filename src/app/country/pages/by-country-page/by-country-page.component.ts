import { Component } from '@angular/core';
import { CountrySearchComponent } from '../../components/country-search/country-search.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  imports: [CountrySearchComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent { }
