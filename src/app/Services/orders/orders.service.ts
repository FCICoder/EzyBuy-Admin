import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from 'src/app/Models/orders';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpclient:HttpClient) { }
  getAllProducts():Observable<any>{
    return this.httpclient.get<Orders[]>(`${environment.BaseApiURL}/customer/order/list`)
  }
}
