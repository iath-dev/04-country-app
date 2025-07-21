import { Location } from '@angular/common';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'error-alert',
  templateUrl: './error-alert.component.html',
})
export class ErrorAlertComponent {
  location = inject(Location);

  goBack = () => {
    this.location.back();
  };
}
