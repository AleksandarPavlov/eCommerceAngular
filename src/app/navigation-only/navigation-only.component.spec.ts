import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationOnlyComponent } from './navigation-only.component';

describe('NavigationOnlyComponent', () => {
  let component: NavigationOnlyComponent;
  let fixture: ComponentFixture<NavigationOnlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationOnlyComponent]
    });
    fixture = TestBed.createComponent(NavigationOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
