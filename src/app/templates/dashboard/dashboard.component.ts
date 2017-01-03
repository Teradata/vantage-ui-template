import { Component } from '@angular/core';

import { single, multi } from './data';

@Component({
  selector: 'covalent-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardTemplateComponent {
  // Chart
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Sales';

  colorScheme: any = {
    domain: ['#1565C0', '#2196F3', '#81D4FA', '#FF9800', '#EF6C00'],
  };

  // line, area
  autoScale: boolean = true;


  constructor() {
    // Cards
    Object.assign(this, {single});
    // Chart
    this.multi = multi.map(group => {
      group.series = group.series.map(dataItem => {
        dataItem.name = new Date(dataItem.name);
        return dataItem;
      });
      return group;
    });
  }
}
