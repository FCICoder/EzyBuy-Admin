import { Component, OnInit,Input } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-app-bar-chart',
  templateUrl: './app-bar-chart.component.html',
  styleUrls: ['./app-bar-chart.component.scss']
})
export class AppBarChartComponent {
  public chart: any;
  @Input() Retailers: any;
  @Input() products: any;
  @Input() orders: any;
  @Input() customers: any;
  public x :number = .8;
  createChart(){
    this.chart = new Chart("MyBarrChart", {
      
      type: 'line', //this denotes tha type of chart

      data: {
        labels: ['Retailers','Orders', 'Customers' , 'Products'],
        datasets: [{
          label: 'All Data  ',
          data: [this.Retailers, this.orders , this.customers , this.products],
          backgroundColor: 'rgba(75, 192, 192)',
            borderColor: 'rgba(200, 100, 200, 1)',
            borderWidth: 1,

        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 0,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
        indexAxis: 'x',

      }
      
    });
  }
  ngOnInit(): void {
    setTimeout(()=>{
      this.createChart();
      this.createChart();
    },2000);
  }
}







