import { Component, AfterViewInit } from '@angular/core';

import { Title }     from '@angular/platform-browser';

import { TdDataTableSortingOrder, TdDataTableService, ITdDataTableSortChangeEvent } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';

const NUMBER_FORMAT: any = (v: {value: number}) => v.value;
const DECIMAL_FORMAT: any = (v: {value: number}) => v.value.toFixed(2);

import { multi } from './data';

@Component({
  selector: 'qs-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorTemplateComponent implements AfterViewInit {
  // Angular Browser title
  title: string;

  // Chart
  multi: any[];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Sales';
  autoScale: boolean = true;
  colorScheme: any = {
    domain: ['#9575CD', '#4FC3F7', '#4DD0E1', '#4DB6AC', '#66BB6A', '#9CCC65'],
  };

  // Datatable
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

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;
  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 5;
  sortBy: string = 'name';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _titleService: Title,
              private _dataTableService: TdDataTableService) {
                // Chart
                this.multi = multi.map((group: any) => {
                  group.series = group.series.map((dataItem: any) => {
                    dataItem.name = new Date(dataItem.name);
                    return dataItem;
                  });
                  return group;
                });
               }

  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Teradata Studio Express 2017' );
    this.filter();
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    newData = this._dataTableService.filterData(newData, this.searchTerm, true);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }
}
