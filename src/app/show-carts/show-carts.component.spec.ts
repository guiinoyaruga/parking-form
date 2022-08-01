import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCartsComponent } from './show-carts.component';

describe('ShowCartsComponent', () => {
  let component: ShowCartsComponent;
  let fixture: ComponentFixture<ShowCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
