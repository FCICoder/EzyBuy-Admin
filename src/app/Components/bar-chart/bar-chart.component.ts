import { IProduct } from 'src/app/Models/IProducts';
import { Component, Input, OnInit , OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { RetailersService } from 'src/app/Services/Retailers/retailers.service';
import { CustomersService } from 'src/app/Services/customers/customers.service';
import { OrdersService } from 'src/app/Services/orders/orders.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {
  //  entry: any;
  @Input() Retailers: any;
  @Input() products: any;
  @Input() orders: any;
  @Input() customers: any;
  dataLoaded = false;
  isLoading:boolean = false;
  productId:string ="";
  selectedOrders:IProduct[]=[];
  public arr:number[] = [];
  public chart: any;

  constructor(public orderSer:OrdersService,public customersSer:CustomersService ,
    public prdService:ProductsService ,public RetService:RetailersService){
    
    }
  
  createChart(){ 
  
    if (this.chart) {
      this.chart.destroy();
    }  
    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes the type of chart

      data: {labels: [
        'Retailers',
        'Products',
        'Customers',
        'Orders'
      ],
      datasets: [{
        label: 'All Data',
        data: [this.Retailers, this.products, this.customers , this.orders ],
        backgroundColor: [
          '#DBB2D1',
          '#B2DBD3',
          '#9FAAFC',
          '#F2D4D4'
        ],
        hoverOffset: 5
      }]
      },
    });
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.createChart();
    },2000);
  }


}
