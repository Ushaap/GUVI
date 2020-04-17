const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http : HttpClient){ }
  postProduct(data) :Observable<any>{
    return this.http.post('http://localhost:3000/addproduct',data)

  }
  listProduct():Observable<any>{
    return this.http.get('http://localhost:3000/product')

  }
  editProduct(data) :Observable<any>{
    return this.http.put('http://localhost:3000/edit/:id',data)

  }
  DelProduct() :Observable<any>{
    return this.http.delete('http://localhost:3000/edit/:id')

  }
   getEmployee(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/product/:id');
  }
      

}
