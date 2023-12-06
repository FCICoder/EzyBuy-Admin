import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Retailer } from 'src/app/Models/Retailers';
import { IProduct } from 'src/app/Models/IProducts';
@Injectable({
  providedIn: 'root'
})
export class RetailersService {
  httpheader={}
  constructor(private httpclient:HttpClient) {
    this.httpheader = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
   }
  getAllRetailers():Observable<Retailer[]>{
    return this.httpclient.get<Retailer[]>(`${environment.BaseApiURL}/retailer`)
  }
  getAllRetailersPrds(id:string ):Observable<any>{

  return this.httpclient.get<IProduct[]>(`${environment.BaseApiURL}/product`,
  {
    headers:{"authorization":localStorage.getItem('adminToken')|| '' , 'id':id }
  }
  )
  }
  deleteRetailerById(RetailerId: string): Observable<void> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpclient.delete<void>(`${environment.BaseApiURL}/retailer/admin/${RetailerId}`);
  }
}
