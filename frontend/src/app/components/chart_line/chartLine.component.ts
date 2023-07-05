import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
    selector: 'app-graph',
    template: `
      <div style="display: block">
        <canvas baseChart
                [datasets]="lineChartData"
                [labels]="lineChartLabels"
                [options]="lineChartOptions"
                [colors]="lineChartColors"
                [legend]="lineChartLegend"
                [chartType]="lineChartType"></canvas>
      </div>
    `,
  })
  export class ChartLineComponent {
    public lineChartData: ChartDataset[] = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    ];
    public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: ChartOptions = {
      responsive: true,
    };
    public lineChartColors: Color[] = [
        { backgroundColor: 'rgba(0, 123, 255, 0.3)', borderColor: 'rgba(0, 123, 255, 1)' }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
  }