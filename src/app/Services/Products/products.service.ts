import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/Models/IProducts';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient:HttpClient) { }
  getAllProducts():Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`${environment.BaseApiURL}/product/all`)
  }
  getProductById(productId:string):Observable<IProduct>{
    return this.httpclient.get<IProduct>(`${environment.BaseApiURL}/product/details/${productId}`)
  }
  getProductBycategory(category:string):Observable<IProduct>{
    return this.httpclient.get<IProduct>(`${environment.BaseApiURL}/product/${category}`)
  }
  deleteProductById(productId: number): Observable<void> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpclient.delete<void>(`${environment.BaseApiURL}/product/admin/${productId}`);
  }
}
