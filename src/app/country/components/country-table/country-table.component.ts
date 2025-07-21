import { DecimalPipe, SlicePipe } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Country } from '@app/country/interfaces/country.interface';
import { LoadingAlertComponent } from '@app/shared/components/loading-alert/loading-alert.component';

@Component({
  selector: 'country-table',
  imports: [RouterLink, DecimalPipe, SlicePipe, LoadingAlertComponent],
  templateUrl: './country-table.component.html',
})
export class CountryTableComponent {
  countries = input<Country[]>([]);
  loading = input<boolean>(false);
  error = input<string | unknown>(null);
  page = signal(1);
  pageSize = signal(10);

  hasPrevious = computed(() => this.page() > 1);
  hasNext = computed(() => this.end < this.countries().length);

  get start(): number {
    return (this.page() - 1) * this.pageSize();
  }

  get end(): number {
    return this.page() * this.pageSize();
  }

  previous(): void {
    if (this.hasPrevious()) this.page.update((val) => val - 1);
  }

  next(): void {
    if (this.hasNext()) this.page.update((val) => val + 1);
  }
}
