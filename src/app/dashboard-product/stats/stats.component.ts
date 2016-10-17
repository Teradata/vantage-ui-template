import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { TdDataTableSortingOrder } from '@covalent/data-table';

const NUMBER_FORMAT: any = (v: {value: number}) => v.value;
const DECIMAL_FORMAT: any = (v: {value: number}) => v.value.toFixed(2);

@Component({
  selector: 'product-stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.scss'],
})
export class ProductStatsComponent implements AfterViewInit {
  columns: any[] = [
    { name: 'name',  label: 'Product' },
    { name: 'type', label: 'Type' },
    { name: 'usage', label: 'CPU Time (m)', numeric: true, format: NUMBER_FORMAT },
    { name: 'users', label: 'Users (K)', numeric: true, format: DECIMAL_FORMAT },
    { name: 'load', label: 'load (%)', numeric: true, format: NUMBER_FORMAT },
    { name: 'time', label: 'time (h)', numeric: true, format: DECIMAL_FORMAT },
    { name: 'quota', label: 'Quota (%)', numeric: true, format: NUMBER_FORMAT },
    { name: 'sessions', label: 'Sessions', numeric: true, format: NUMBER_FORMAT },
    { name: 'containers', label: 'Containers', numeric: true, format: NUMBER_FORMAT },
  ];

  sorting: boolean = true;
  pagination: boolean = true;
  pageSize: number = 5;

  data: any[] = [
      {
        'name': 'Ingest',
        'type': 'container',
        'usage': { 'value': 159.0 },
        'users': { 'value': 6.0 },
        'load': { 'value': 24.0 },
        'time': { 'value': 4.0 },
        'quota': { 'value': 87.0 },
        'sessions': { 'value': 14.0 },
        'containers': { 'value': 1.0 },
      }, {
        'name': 'Containers',
        'type': 'container',
        'usage': { 'value': 237.0 },
        'users': { 'value': 9.0 },
        'load': { 'value': 37.0 },
        'time': { 'value': 4.3 },
        'quota': { 'value': 129.0 },
        'sessions': { 'value': 8.0 },
        'containers': { 'value': 1.0 },
      }, {
        'name': 'Computer Engines',
        'type': 'hardware',
        'usage': { 'value':  262.0 },
        'users': { 'value': 16.0 },
        'load': { 'value': 24.0 },
        'time': { 'value':  6.0 },
        'quota': { 'value': 337.0 },
        'sessions': { 'value':  6.0 },
        'containers': { 'value': 7.0 },
      }, {
        'name': 'Memory',
        'type': 'hardware',
        'usage': { 'value':  305.0 },
        'users': { 'value': 3.7 },
        'load': { 'value': 67.0 },
        'time': { 'value': 4.3 },
        'quota': { 'value': 413.0 },
        'sessions': { 'value': 3.0 },
        'containers': { 'value': 8.0 },
      }, {
        'name': 'Workload Engine',
        'type': 'engines',
        'usage': { 'value':  375.0 },
        'users': { 'value': 0.0 },
        'load': { 'value': 94.0 },
        'time': { 'value': 0.0 },
        'quota': { 'value': 50.0 },
        'sessions': { 'value': 0.0 },
        'containers': { 'value': 0.0 },
      }, {
        'name': 'High Availability',
        'type': 'container',
        'usage': { 'value': 392.0 },
        'users': { 'value': 0.2 },
        'load': { 'value': 98.0 },
        'time': { 'value': 0.0 },
        'quota': { 'value': 38.0 },
        'sessions': { 'value': 0.0 },
        'containers': { 'value': 2.0 },
      }, {
        'name': 'Database',
        'type': 'engines',
        'usage': { 'value': 408.0 },
        'users': { 'value': 3.2 },
        'load': { 'value': 87.0 },
        'time': { 'value': 6.5 },
        'quota': { 'value': 562.0 },
        'sessions': { 'value': 0.0 },
        'containers': { 'value': 45.0 },
      }, {
        'name': 'Logs',
        'type': 'containers',
        'usage': { 'value': 452.0 },
        'users': { 'value': 25.0 },
        'load': { 'value': 51.0 },
        'time': { 'value': 4.9 },
        'quota': { 'value': 326.0 },
        'sessions': { 'value': 2.0 },
        'containers': { 'value': 22.0 },
      }, {
        'name': 'Orchestrator',
        'type': 'service',
        'usage': { 'value': 518.0 },
        'users': { 'value': 26.0 },
        'load': { 'value': 65.0 },
        'time': { 'value': 7.0 },
        'quota': { 'value': 54.0 },
        'sessions': { 'value': 12.0 },
        'containers': { 'value': 6.0 },
      },
    ];

  sortBy: string = 'name';
  sortOrder: string = 'ASC';

  rowSelection: boolean = false;
  multiple: boolean = true;

  constructor(private _titleService: Title) { }

  sortChanged(changes: any): void {
    const { column, order }: any = changes;

    this.sortBy = column.name;
    this.sortOrder = order === TdDataTableSortingOrder.Ascending ? 'ASC' : 'DESC';
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Product Stats' );
  }
}
