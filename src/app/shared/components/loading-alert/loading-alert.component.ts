import { Component } from '@angular/core';

@Component({
  selector: 'loading-alert',
  template: `
    <div class="alert alert-info alert-soft">
      <span class="loading loading-spinner loading-xs"></span>
      <span>Loading....</span>
    </div>
  `
})
export class LoadingAlertComponent { }
