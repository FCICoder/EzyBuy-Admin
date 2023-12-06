import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AdminAuthService } from './Services/admin-auth/admin-auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges {
  title = 'super-admin';
  opened= true;
  flag:boolean=false;
  show : boolean = false;
  constructor(private adminSrv : AdminAuthService , public authServ:AdminAuthService , 
    private router : Router , private spinner: NgxSpinnerService){}
  ngOnInit(): void {
this.adminSrv.adminLogged$.subscribe(
  (data)=>{
    this.flag=data
  }
);

  
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);

    if(localStorage.getItem('adminToken')){
      this.show = true;
    }else{
      this.show = false;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.adminSrv.adminLogged$.subscribe(
      (data)=>{
        this.flag=data
      })
  }

  logout(){
    this.adminSrv.logout();
    this.router.navigate(['login']); 
  }
}
