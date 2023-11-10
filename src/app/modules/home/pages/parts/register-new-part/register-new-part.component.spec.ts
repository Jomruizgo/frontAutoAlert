import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewPartComponent } from './register-new-part.component';

describe('RegisterNewPartComponent', () => {
  let component: RegisterNewPartComponent;
  let fixture: ComponentFixture<RegisterNewPartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterNewPartComponent]
    });
    fixture = TestBed.createComponent(RegisterNewPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
