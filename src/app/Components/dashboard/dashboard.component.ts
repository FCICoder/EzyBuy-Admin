import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = false ;
  opened :boolean = false;
  changeValue (newVlaue:boolean){
    this.opened = newVlaue;
    console.log(this.opened);
    
  }
  constructor(private spinner: NgxSpinnerService){
    
  }
 
  ngOnInit(): void {
    this.isLoading = true;
  this.spinner.show();

  setTimeout(() => {
    this.spinner.hide();
    this.isLoading = false;
  }, 5000);
  }

}
