import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailesComponentComponent } from './product-detailes-component.component';

describe('ProductDetailesComponentComponent', () => {
  let component: ProductDetailesComponentComponent;
  let fixture: ComponentFixture<ProductDetailesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
