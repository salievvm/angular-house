import { Component, Input } from '@angular/core';
import { HousingLocationInterface } from './housing-location.type';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  /**
   * You have to add the ! because the input is expecting the value to be passed.
   * In this case, there is no default value.
   * The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
   */
  @Input() housingLocation!: HousingLocationInterface;
  
  isShown = true;

  handleIsShown = () => this.isShown = !this.isShown;
}
