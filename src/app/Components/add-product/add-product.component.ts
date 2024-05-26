import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  product: any = {
    id: this.generateThreeDigitId(),


    ProductName: "",
    ProductBrand: "",
    ProductDetails: "",
    Price: "",
    DiscountPrice: "",
    DiscountPercent: ""




  }
  generateThreeDigitId() {
    return Math.floor(100 + Math.random() * 900); // Generates a number between 100 and 999
  }
  ProductService = inject(ProductService);
  router = inject(Router);

  addProduct() {
    console.log(this.product);
    this.ProductService.addProduct(this.product).subscribe(res => {
      alert("Product Added Successfully");
      this.router.navigateByUrl("/");

    })

  }

}
