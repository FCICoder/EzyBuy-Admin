import { Component, OnInit,Input } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit {
  public chart: any;
  @Input() beauty: any;
  @Input() Kids: any;
  @Input() fashion: any;
  @Input() grocery: any;
  @Input() electronics: any;
  public x :number = .8;
  createChart(){
    this.chart = new Chart("MyLineChart", {
      type: 'bar', //this denotes tha type of chart

      data: {
        labels: ['Beauty','Kids', 'Fashion' , 'Electronics','Groceries'],
        datasets: [{
          label: 'All Data  ',
          data: [this.beauty, this.Kids , this.fashion , this.electronics,this.grocery],
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
