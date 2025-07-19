import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { ClockStatComponent } from '@app/country/components/clock-stat/clock-stat.component';
import { ImageDiffComponent } from '@app/country/components/image-diff/image-diff.component';
import { InfoStatComponent } from '@app/country/components/info-stat/info-stat.component';
import {
  Country,
  CountryDetail,
} from '@app/country/interfaces/country.interface';

@Component({
  selector: 'country-information',
  imports: [
    DecimalPipe,
    ClockStatComponent,
    InfoStatComponent,
    ImageDiffComponent,
  ],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  country = input.required<CountryDetail>();
}
