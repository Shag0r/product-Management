import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ProductCardComponent, CommonModule, SearchComponent]
})
export class HomeComponent {


  product: any[] = [];


  filteredProduct: any[] = [];
  productService = inject(ProductService);
  router = inject(Router)

  ngOnInit() {
    // this.product = this.productService.products;
    this.productService.getProducts().subscribe((res) => {
      console.log(res);
      this.product = res as any[];
      this.filteredProduct = this.product;

    })


  }
  OnViewProducts(event: any) {
    console.log("I love you Prtiy", event);
    this.router.navigateByUrl("/product/" + event);
  }
  OnSearch(search: string) {
    console.log(search);
    if (search) {
      this.filteredProduct = this.product.filter(x => x.ProductName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        x.ProductBrand.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        x.ProductDetails.toLocaleLowerCase().includes(search.toLocaleLowerCase())


      );

    }

    else {
      this.filteredProduct = this.product;

    }

  }


}
