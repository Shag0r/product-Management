import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  formBuilder = inject(FormBuilder);
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  productForm: FormGroup = this.formBuilder.group({

    id: [''],
    ProductName: [''],
    ProductBrand: [''],
    ProductDetails: [''],
    Price: [''],
    DiscountPrice: [''],
    DiscountPercent: ['']
  })
  ngOnInit() {

    let productId = this.activatedRoute.snapshot.params["id"];
    this.productService.getProductId(productId).subscribe(res => {
      this.productForm.patchValue(res);


    })


  }

  EditProduct() {
    console.log("Edit product working", this.productForm.value);
    this.productService.updateProduct(this.productForm.value).subscribe(res => {
      alert("Product Detailes Edited Successfully");
      this.router.navigateByUrl("/")
    })
  }

}
