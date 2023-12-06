import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Retailer } from './../../Models/Retailers';
import { RetailersService } from 'src/app/Services/Retailers/retailers.service';
import { IProduct } from 'src/app/Models/IProducts';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html',
  styleUrls: ['./retailers.component.scss']
})
export class RetailersComponent implements OnInit {
  Retailers:Retailer[]=[];
  RetailerEmail:string="";
  RetailerId:string[]=[];
  selectRetailer:Retailer[]=[];
  retailerPrds = [];
  pageSize:number =10;
  currentPage:number =1;
  totalPages: number=0;
  isLoading: boolean = false ;
  counter:number = 0;
constructor(public RetService:RetailersService , private spinner: NgxSpinnerService ,private confirm:NgConfirmService){}
ngOnInit(): void {
  this.loadRetailers();
  this.isLoading = true;
  this.spinner.show();

  setTimeout(() => {
    this.spinner.hide();
  }, 5000);

  
}
loadRetailers(): void{
  this.RetService.getAllRetailers().subscribe({
    next:(data)=>{
      this.Retailers=data;
      this.selectRetailer=data;
      this.updateDisplayRetailer();
      for(let i = 0 ; i < data.length; i++){
        this.RetailerId.push(data[i]._id);
      }
      for(let i = 0 ; i<this.RetailerId.length; i++){
        this.loadRetailersPrds(this.RetailerId[i])
      }
      this.isLoading = false;
    },
    error:(err)=>{
      console.log(err); 
    }
  })
}

loadRetailersPrds(id:string):void{
  
     this.RetService.getAllRetailersPrds(id).subscribe({
    next:(data)=>{
      this.retailerPrds = data.products
      this.Retailers[this.counter].products.push(...this.retailerPrds)
      this.counter++;
      
    },
    error:(err)=>{
      console.log('err',err);
       
    }
  })
}


searchRetailer(): void {
  if (this.RetailerEmail.trim()!=="") {
    this.selectRetailer = this.Retailers.filter(Retailer => Retailer.email.includes(this.RetailerEmail.trim()));

  }else{
    this.loadRetailers();
  }
}

updateDisplayRetailer():void{
  const startIndex = (this.currentPage - 1) * this.pageSize;
  this.selectRetailer = this.Retailers.slice(startIndex, startIndex + this.pageSize);
}
onPageChange(page: number): void {
  this.currentPage = page;
  this.updateDisplayRetailer();
  this.totalPages = Math.ceil(this.Retailers.length / this.pageSize);  
}
deleteRetailer(retailerId: string): void {
  this.confirm.showConfirm("Are you sure want to delete?",
    () => {
      this.RetService.deleteRetailerById(retailerId).subscribe(
        () => {
          this.selectRetailer = this.selectRetailer.filter(retailer => retailer._id !== retailerId);
        },
        (error) => {
          console.error(error);
        }
      );
    },
    () => {
      console.log("Deletion canceled");
    }
  );
}
}
