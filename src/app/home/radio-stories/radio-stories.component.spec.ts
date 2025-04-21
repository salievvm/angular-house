import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioStoriesComponent } from './radio-stories.component';

describe('RadioStoriesComponent', () => {
  let component: RadioStoriesComponent;
  let fixture: ComponentFixture<RadioStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioStoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
