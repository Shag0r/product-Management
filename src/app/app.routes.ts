import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ProductDetailesComponentComponent } from './Components/product-detailes-component/product-detailes-component.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent

    },

    {
        path: "product/:id",
        component: ProductDetailesComponentComponent

    },
    {
        path: "add-product",
        component: AddProductComponent
    },
    {
        path: 'edit-product/:id',
        component: EditProductComponent
    }
];
