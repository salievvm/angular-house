import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homes';
}
