import { Component, OnInit } from '@angular/core';
import{FormGroup , FormControl, Validators} from '@angular/forms'
import { ProductService } from '../product.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  userForm;
  
    constructor(private productService : ProductService) {
    this.userForm = new FormGroup({
      'name':new FormControl('',Validators.required),
      'price':new FormControl('',Validators.required),
      'quantity':new FormControl('',Validators.required),
      'prodcategory':new FormControl('',Validators.required),
    })
   }

  ngOnInit(): void {
    
  }

  sendData(){
    
      console.log(this.userForm.value);
      this.productService.postProduct(this.userForm.value).subscribe((productData) =>{
        alert("DONE")
      })

  }

}
