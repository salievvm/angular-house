import { Injectable } from '@angular/core';
import { HousingLocationInterface } from './housing-location.type';
import { housingLocationList } from './mock/data';

@Injectable({
  providedIn: 'root'
})
export class HousingLocationService {
  readonly url = 'http://localhost:3000/locations';

  housingLocationList: HousingLocationInterface[] = housingLocationList;

  async getAllHousingLocations(): Promise<HousingLocationInterface[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocationInterface | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
