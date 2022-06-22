import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductsComponent } from './show-products.component';

describe('RegistrarCarroComponent', () => {
  let component: ShowProductsComponent;
  let fixture: ComponentFixture<ShowProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
