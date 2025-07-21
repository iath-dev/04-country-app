import { Component, effect, input, linkedSignal, output } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './country-search.component.html',
})
export class CountrySearchComponent {
  placeholder = input<string>('Search');
  initialValue = input<string>('');
  search = output<string>();

  inputValue = linkedSignal(() => this.initialValue());

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.search.emit(value);
    }, 300);

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}
