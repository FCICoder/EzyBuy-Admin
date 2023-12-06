import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminAuthService } from 'src/app/Services/admin-auth/admin-auth.service';

@Component({
  selector: 'app-group-of-components',
  templateUrl: './group-of-components.component.html',
  styleUrls: ['./group-of-components.component.scss']
})
export class GroupOfComponentsComponent {
  opened= true;
  show : boolean = false;
  constructor(private adminSrv : AdminAuthService , private router : Router , private spinner: NgxSpinnerService){}
  ngOnInit(): void {
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
  logout(){
    this.adminSrv.logout();
    this.router.navigate(['login']); 
  }
}
