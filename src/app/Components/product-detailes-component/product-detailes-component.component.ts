import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { ProductService } from '../../product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detailes-component',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, RouterLink],
  templateUrl: './product-detailes-component.component.html',
  styleUrl: './product-detailes-component.component.scss'
})
export class ProductDetailesComponentComponent {
  products: any;
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    let productId = this.activatedRoute.snapshot.params["id"];
    this.productService.getProductId(productId).subscribe((res: any) => {
      this.products = res;
    });

  }

}
