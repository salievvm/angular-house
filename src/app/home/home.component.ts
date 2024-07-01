import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  HousingLocationComponent,
  HousingLocationService,
  HousingLocationInterface,
} from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  housingService: HousingLocationService = inject(HousingLocationService);
  housingLocationList!: HousingLocationInterface[];
  filteredLocationList: HousingLocationInterface[] = [];

  filterForm = new FormGroup({
    filter: new FormControl(''),
  });

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInterface[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = this.housingLocationList;
      });
  }

  filterResults = () => {
    const filtered: string = this.filterForm.value.filter ?? '';

    this.filteredLocationList = this.housingLocationList.filter(({ city }) =>
      city.toLowerCase().includes(filtered.toLowerCase())
    );
  };
}
