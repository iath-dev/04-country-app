import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  dateYear = new Date().getFullYear();
}
