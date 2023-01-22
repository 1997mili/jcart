import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  search=new BehaviorSubject("")

  constructor(private httpclient:HttpClient) { }

//http request to view all products
viewAllProducts(){

  return this.httpclient.get("http://localhost:3000/products")
}

addProduct(newproduct:any){
  return this.httpclient.post("http://localhost:3000/products",newproduct)
}
 
//api to get single product

viewproduct(id:any){
  return this.httpclient.get("http://localhost:3000/products/"+id)
}
// delete product
DeleteProduct(id:any){
  return this.httpclient.delete("http://localhost:3000/products/"+id)
}
// update product
editProduct(id:any,data:any){
  return this.httpclient.put ("http://localhost:3000/products/"+id,data)
}
}
