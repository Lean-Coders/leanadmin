import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    chartOptions = {
        responsive: true
    };

    chartData = [
        { data: [330, 600, 260, 700], label: 'Besucher' }
    ];

    chartColors = [
        {
            backgroundColor: 'rgba(103, 58, 183, .1)',
            borderColor: 'rgb(103, 58, 183)',
            pointBackgroundColor: 'rgb(103, 58, 183)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
        },
        // ...colors for additional data sets
    ];

    chartLabels = ['January', 'February', 'Mars', 'April'];

    onChartClick(event) {
        console.log(event);
    }

}
