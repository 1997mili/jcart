import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
 productid:any
 productdata:any
 //productservice:any
  constructor(private ar:ActivatedRoute,private ps:ProductserviceService,private router:Router){}

  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.productid=data["id"]

     
    })
    this.ps.viewproduct(this.productid).subscribe((item:any)=>{
      this.productdata=item
    })
  }
  updateProduct(form:any){
    let updateProduct={
      id:form.value.id,
      productName:form.value.productName ,
      categoryId:form.value.categoryId ,
      description:form.value.description ,
      price:form.value.price,
      is_available:form.value.is_available,
      productImage:form.value.productImage,
      rating:form.value.rating,
      review:form.value.review,
      vendor_Name:form.value.vendor_Name,
      warrenty:form.value.warrenty 
    }
    this.ps.editProduct(this.productid,this.productdata).subscribe((data:any)=>{
            alert('product details updated')
            this.router.navigateByUrl('product')
    })
  }

}
