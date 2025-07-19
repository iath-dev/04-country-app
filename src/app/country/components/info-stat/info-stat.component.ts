import { Component, input } from '@angular/core';

@Component({
  selector: 'country-info-stat',
  imports: [],
  template: `
    <div class="stat">
      <div class="stat-figure">
        <ng-content></ng-content>
      </div>
      <div class="stat-value">
        {{ value() }}
      </div>
      <div class="stat-title">{{ title() }}</div>
    </div>
  `,
})
export class InfoStatComponent {
  value = input<string | null>('');
  title = input<string | null>('');
}
