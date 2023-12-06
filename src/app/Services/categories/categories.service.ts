import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categories } from 'src/app/Models/categories';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpclient:HttpClient) { }
  getAllCategories():Observable<categories[]>{
    return this.httpclient.get<categories[]>(`${environment.BaseApiURL}/category`)
  }
}



  