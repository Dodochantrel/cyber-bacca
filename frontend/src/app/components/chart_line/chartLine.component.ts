import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-graph',
    standalone: true,
    templateUrl: './chartLine.component.html',
    styleUrls: ['./chartLine.component.css'],
})

export class ChartLineComponent {
    public lineChartData: ChartDataset[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      ];
      public lineChartOptions: ChartOptions = {
        responsive: true,
      };
      public lineChartLegend = true;
      public lineChartType = 'line';
}
