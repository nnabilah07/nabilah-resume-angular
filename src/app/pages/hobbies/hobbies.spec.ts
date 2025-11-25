import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HobbiesComponent } from './hobbies';

describe('HobbiesComponent', () => {
  let component: HobbiesComponent;
  let fixture: ComponentFixture<HobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HobbiesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HobbiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
