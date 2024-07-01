import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousingLocationComponent } from '../housing-location';
import { HousingLocationInterface } from '../housing-location/housing-location.type';
import { housingLocationList } from './mock/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly baseUrl = '/assets/houses';

  housingLocationList: HousingLocationInterface[] = housingLocationList.map((house) => ({
    ...house,
    photo: `${this.baseUrl}/${house.photo}`
  }));
}