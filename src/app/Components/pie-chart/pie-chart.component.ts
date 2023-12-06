import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  chartOptions = {
	  animationEnabled: true,
	  theme: "light",
	  title:{
		text: "Products Categories"
	  },
	  data: [{
		type: "pie",
		startAngle: 45,
		indexLabel: "{y}",
		indexLabelPlacement: "inside",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 21.3, name: "smartphones" },
		  { y: 27.7, name: "laptops" },
		  { y: 17, name: "fragrances" },
		  { y: 14.9, name: "skincare" },
		  { y: 10.6, name: "groceries" },
		  { y: 8.5, name: "home-decoration" }
		]
	  }]
	}	
}
