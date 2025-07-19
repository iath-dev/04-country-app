import { Component, input } from '@angular/core';

@Component({
  selector: 'country-image-diff',
  imports: [],
  templateUrl: './image-diff.component.html',
})
export class ImageDiffComponent {
  image = input.required<string>();
}
