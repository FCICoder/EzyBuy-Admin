import { Router } from '@angular/router';
import { AdminAuthService } from './../../../Services/admin-auth/admin-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// export class LoginComponent {
// constructor(private adminLog:AdminAuthService , private router:Router , private fb : FormBuilder){

// }
// }
export class LoginComponent implements OnInit{
  adminForm: FormGroup;
  isLoggedIn: boolean = false;
  type:string = 'password'
  constructor(private adminSrv: AdminAuthService, private router: Router, private formBuilder: FormBuilder) {
    this.adminForm = this.formBuilder.group({
    
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

    // ngOnInit(): void {
    //   this.adminSrv.userLogged$.subscribe((status) => {
    //     this.isLoggedIn = status;
    //   })
    // }
    ngOnInit(): void {
      
    }
  get email(){
    return this.adminForm.get('email');
  }
  get password(){
    return this.adminForm.get('password');
  }
  // logout(): void {
  //   this.adminSrv.logout();
  // }
  onSubmit(){
    if (this.adminForm.valid) {
      this.adminSrv.login(this.adminForm.value).subscribe(
        (response) => {
          // console.log('login successful!', response);
          swal.fire({
            title: 'login  successful!',
            icon: 'success',
            confirmButtonText: 'Ok', 
            customClass: {
              confirmButton: 'btn btn-warning'  
            }
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/']); 
            }
          })

              },
        (error) => {
          console.error('Error in signup this email not match with admin', error);
          Swal.fire({
            title: 'this email not match with admin',
            icon: 'error',
            confirmButtonText: 'Ok', 
            customClass: {
              confirmButton: 'btn btn-warning'  
            }
              }
      );
    }
      )}
}

show(){
  if(this.type == 'password'){
    this.type = 'text';
  }else{
  this.type = 'password';
  }
}
}
