import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



const routes: Routes = [
  {
    path:'',
    component :HomeComponent
    },
    {
      path:'about',
     component :AboutComponent
    },
    {
    path:'contact',
    component :ContactComponent
    },
   {
      path:'category/:id',
      component: CategoryComponent
   },
   {
      path:'category/clothing/:id',
      component : ProductDetailsComponent
   },
   {
   
    path:'category/footwear/:id',
    component : ProductDetailsComponent

   },
   { 
    path:'product/:id',
    component : ProductDetailsComponent

   },
   {
    path:'addproduct',
    component :AddproductComponent

   },
   {
    path:'product',
    component :ProductListComponent

   },
   {
    path:'edit/:id',
    component :ProductEditComponent

   },
   {
    path:'delete/:id',
    component :ProductDeleteComponent

   }
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
