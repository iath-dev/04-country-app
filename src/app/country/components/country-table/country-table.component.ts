import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Country } from '@app/country/interfaces/country.interface';
import { LoadingAlertComponent } from '@app/shared/components/loading-alert/loading-alert.component';

@Component({
  selector: 'country-table',
  imports: [RouterLink, DecimalPipe, LoadingAlertComponent],
  templateUrl: './country-table.component.html',
})
export class CountryTableComponent {
  countries = input<Country[]>([]);
  loading = input<boolean>(false);
  error = input<string | unknown>(null);
}
