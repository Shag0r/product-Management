import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // calling the http client server
  httpClient = inject(HttpClient);
  // products = [];


  constructor() { }
  // calling the api 
  getProducts() {
    return this.httpClient.get("http://localhost:3000/products");
  }
  getProductId(id: any) {
    return this.httpClient.get("http://localhost:3000/products/" + id);

  }
  addProduct(product: any) {
    return this.httpClient.post("http://localhost:3000/products", product);


  }
  updateProduct(product: any) {
    return this.httpClient.put("http://localhost:3000/products/" + product.id, product);


  }

}
