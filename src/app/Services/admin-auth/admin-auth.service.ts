import { Observable, tap , BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from 'src/app/Models/admin';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  httpheader={}
  flag:boolean=false;
  private adminLogged = new BehaviorSubject<boolean>(this.isAdminLog());
  constructor(private Http:HttpClient) {
    this.httpheader = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
  }

  isAdminLog(): boolean {
    return !!localStorage.getItem('adminToken');
  }

  get adminLogged$() {
    return this.adminLogged.asObservable();
  }

  login(admin:Admin):Observable<Admin>{
      return this.Http.post<Admin>(`${environment.BaseApiURL}/admin/login`,JSON.stringify(admin), this.httpheader )
      .pipe(
        tap(res => {
          const token = res.token;
          localStorage.setItem('adminToken', token);
          this.adminLogged.next(true);
        })  
        )}
  
  logout():void{
    localStorage.removeItem('adminToken');
    this.adminLogged.next(false);
  }


}
