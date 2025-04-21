import { Component } from '@angular/core';
import { BccDsCardComponent, RadioComponent } from 'bcc-design-system-angular';


@Component({
  selector: 'app-radio-stories',
  standalone: true,
  imports: [BccDsCardComponent, RadioComponent],
  templateUrl: './radio-stories.component.html',
  styleUrl: './radio-stories.component.scss',
})
export class RadioStoriesComponent {
  isChecked: string | null = null;

  handleRadioChange(selected: string): void {
    this.isChecked = selected;
    console.log('Radio button changed:', selected);
  }
}
