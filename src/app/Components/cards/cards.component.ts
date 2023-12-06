import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit , OnDestroy } from '@angular/core';
import { CustomersService } from 'src/app/Services/customers/customers.service';
import { Customers } from 'src/app/Models/customers';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { IProduct } from 'src/app/Models/IProducts';
import { RetailersService } from 'src/app/Services/Retailers/retailers.service';
import { Retailer } from 'src/app/Models/Retailers';
import { OrdersService } from 'src/app/Services/orders/orders.service';
import { Orders } from './../../Models/orders';
import { CategoriesService } from 'src/app/Services/categories/categories.service';
import { categories } from 'src/app/Models/categories';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],

})
export class CardsComponent implements OnDestroy, OnInit  {
   public customers:Customers[]=[];
   public products:IProduct[]=[];
   public Retailers:Retailer[]=[];
   public beauty: IProduct[]=[];
   public Kids: IProduct[]=[];
   public fashion: IProduct[]=[];
   public electronics: IProduct[]=[];
   public grocery: IProduct[]=[];
   public categories : categories[] = []
  isLoading:boolean = false;
   public orders:Orders[]=[];
  productId:string ="";
  currentPage:number =1;
  selectedOrders:IProduct[]=[];
  pageSize:number =20;
  totalPages: number=0;  // Total number of pages
  customerCart:IProduct[]=[];
  dataLoaded = false;
  constructor(public orderSer:OrdersService,private cateService : CategoriesService,private spinner: NgxSpinnerService,public customersSer:CustomersService ,public prdService:ProductsService ,public RetService:RetailersService){
    this.loadOrders();
    this.loadRetailers();
    this.loadCustomers();
    this.loadProducts();
    setTimeout(() => {
    }, 3000);
  }
  
 

  ngOnDestroy():void{
    this.loadOrders();
    this.loadRetailers();
    this.loadCustomers();
    this.loadProducts();
  }
  
  loadRetailers():any{
  this.RetService.getAllRetailers().subscribe({
    next:(data:any)=>{
      this.Retailers=data;
      this.isLoading = false;
    },
    error:(err)=>{
      console.log("error"); 
    }
  })
}
getAllCategories():void{
  this.cateService.getAllCategories().subscribe({
    next: (data) => {
      this.categories = data;
      console.log(this.categories);
      
    },
    error: (err) => {
      console.log(err);
    }
  });

}
loadProducts():any{
  this.prdService.getAllProducts().subscribe({
    next: (data:any) => {
      this.products = data;
      this.isLoading = false;
      
   this.beauty = this.products?.filter(prd=> prd.category === 'Beauty')
   this.electronics = this.products?.filter(prd => prd.category === 'electronics') 
   this.grocery = this.products?.filter(prd => prd.category === 'groceries') 
   this.fashion = this.products?.filter(prd => prd.category === 'fashion') 
   this.Kids = this.products?.filter(prd => prd.category === 'Kids') 

    },
    error: (err) => {
      console.log(err);
    }
  });
}
  loadCustomers():any{
  this.customersSer.getAllCustomers().subscribe({
    next:(data:any)=>{
      data.customers = [... new Set(data.customers)]
      this.customers.push(...data.customers);
      this.isLoading = false;
    },
    error:(err)=>{
      console.log(err); 
    }
  })}
  
  loadOrders():void{
    this.orderSer.getAllProducts().subscribe({
      next: (data:any) => {
        data.Orders = [...data.Orders]
        this.orders.push(...data.Orders ); 
        this.selectedOrders.push(...data.Orders );
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }
  ngOnInit(): void {
    this.getAllCategories()
  }
}