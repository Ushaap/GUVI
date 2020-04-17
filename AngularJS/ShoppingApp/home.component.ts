import { Component, OnInit } from '@angular/core';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productdetails = new CategoryComponent();
  prod = this.productdetails.proddetails
  constructor() { }

  ngOnInit(): void {
  }

}
