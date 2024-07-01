import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HousingLocationComponent,
  HousingLocationInterface,
} from '../housing-location/';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

  housingLocation: HousingLocationInterface = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}