import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/Models/customers';
import { CustomersService } from 'src/app/Services/customers/customers.service';
import { NgConfirmService } from 'ng-confirm-box';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers:Customers[]=[];
  newCust:Customers[]=[];
  customerEmail:string="";
  selectCustomer:Customers[]=[];
  pageSize:number =10;
  currentPage:number =1;
  totalPages: number=0;  // Total number of pages
  isLoading:boolean = false;
  constructor(private spinner: NgxSpinnerService,public customersSer:CustomersService ,private confirm:NgConfirmService){}
  
  ngOnInit(): void {
    this.isLoading = true;
    this.loadCustomers();
    this.spinner.show();

  setTimeout(() => {
    this.spinner.hide();
  }, 5000);

  }
loadCustomers():void{
  this.customersSer.getAllCustomers().subscribe({
    next:(data)=>{
      data.customers = [... new Set(data.customers)]
      
      this.customers.push(...data.customers);
      
      this.selectCustomer.push(...data.customers)
      this.isLoading = false;
      this.updateDisplayCutomers();
    },
    error:(err)=>{
      console.log(err); 
    }
  })
}
searchCustomer(): void {
    if (this.customerEmail.trim()!=="") {
      this.selectCustomer = this.customers.filter(customer => customer.email.includes(this.customerEmail.trim()));
    }else{
      this.loadCustomers();
    }
  }
  updateDisplayCutomers():void{
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.selectCustomer = this.customers.slice(startIndex, startIndex + this.pageSize);
  }
  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayCutomers();
    this.totalPages = Math.ceil(this.customers.length / this.pageSize);  
  }

  deleteCustomer(custmoerId: number): void {
    this.confirm.showConfirm("Are you sure want to delete?",
      () => {
        this.customersSer.deleteCustomerId(custmoerId).subscribe(
          () => {
            this.selectCustomer = this.selectCustomer.filter(customer => customer._id !== custmoerId);
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
