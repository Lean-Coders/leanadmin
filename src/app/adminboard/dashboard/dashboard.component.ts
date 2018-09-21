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
            backgroundColor: 'rgba(19, 84, 122, .1)',
            borderColor: 'rgb(19, 84, 122)',
            pointBackgroundColor: 'rgb(19, 84, 122)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(19, 84, 122, .8)'
        },
        // ...colors for additional data sets
    ];

    chartLabels = ['January', 'February', 'Mars', 'April'];

    onChartClick(event) {
        console.log(event);
    }

}
