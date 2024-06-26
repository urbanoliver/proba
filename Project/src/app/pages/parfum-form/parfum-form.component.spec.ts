import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParfumFormComponent } from './parfum-form.component';

describe('ParfumFormComponent', () => {
  let component: ParfumFormComponent;
  let fixture: ComponentFixture<ParfumFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParfumFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParfumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
