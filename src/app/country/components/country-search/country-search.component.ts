import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './country-search.component.html',
})
export class CountrySearchComponent {
  placeholder = input<string>('Search')
  search = output<string>();

  public searchCountry(query: string) {
    this.search.emit(query);
  }
}
