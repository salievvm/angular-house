import { Injectable } from '@angular/core';
import { HousingLocationInterface } from './housing-location.type';
import { housingLocationList } from './mock/data';

@Injectable({
  providedIn: 'root'
})
export class HousingLocationService {
  readonly baseUrl = '/assets/houses';

  housingLocationList: HousingLocationInterface[] = housingLocationList.map((house) => ({
    ...house,
    photo: `${this.baseUrl}/${house.photo}`
  }));

  getAllHousingLocations(): HousingLocationInterface[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocationInterface | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }
}
