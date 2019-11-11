import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { TdLoadingService } from '@covalent/core/loading';

import { VantageErrorService } from '@td-vantage/ui-platform/utilities';
import { VantageSystemService, ISystem } from '@td-vantage/ui-platform/system';

import { forkJoin } from 'rxjs';

@Component({
  selector: 'td-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  systems: ISystem[];

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _systemService: VantageSystemService,
    private _loadingService: TdLoadingService,
    private _errorService: VantageErrorService,
  ) {}

  async ngOnInit(): Promise<void> {
    this._loadingService.register('overview.dashboard');
    try {
      await forkJoin([this.loadSystems()]).toPromise();
    } catch (error) {
      this._errorService.open(error);
    }
    this._loadingService.resolve('overview.dashboard');
  }

  async loadSystems(): Promise<void> {
    const response: { data: ISystem[] } = await this._systemService.query().toPromise();
    this.systems = response.data;
  }
}
