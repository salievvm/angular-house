import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  HousingLocationComponent,
  HousingLocationService,
  HousingLocationInterface,
} from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  housingService: HousingLocationService = inject(HousingLocationService);
  housingLocationList!: HousingLocationInterface[];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}