import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParfumokComponent } from './edit-parfumok.component';

describe('EditParfumokComponent', () => {
  let component: EditParfumokComponent;
  let fixture: ComponentFixture<EditParfumokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditParfumokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditParfumokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
