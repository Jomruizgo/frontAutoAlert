import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPartComponent } from './register-part.component';

describe('RegisterPartComponent', () => {
  let component: RegisterPartComponent;
  let fixture: ComponentFixture<RegisterPartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPartComponent]
    });
    fixture = TestBed.createComponent(RegisterPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
