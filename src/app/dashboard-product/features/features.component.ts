import { Component, AfterViewInit, ViewContainerRef } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { TdLoadingService } from '@covalent/core';
import { TdDialogService } from '@covalent/core';

import { FeaturesService, IFeature } from '../../../services';

@Component({
  selector: 'product-features',
  templateUrl: 'features.component.html',
  styleUrls: ['features.component.scss'],
  viewProviders: [ FeaturesService ],
})
export class ProductFeaturesComponent implements AfterViewInit {

  features: IFeature[];
  filteredFeatures: IFeature[];

  constructor(private _titleService: Title,
              private _dialogService: TdDialogService,
              private _viewContainerRef: ViewContainerRef,
              private _featuresService: FeaturesService,
              private _loadingService: TdLoadingService) {

  }
  openConfirm(): void {
    this._dialogService.openConfirm({
      message: 'Are you sure you want to delete this item? It\'s used on other items.',
      viewContainerRef: this._viewContainerRef,
      title: 'Confirm',
      cancelButton: 'No, Cancel',
      acceptButton: 'Yes, Delete',
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        // DO SOMETHING
      } else {
        // DO SOMETHING ELSE
      }
    });
  }
  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Product Features' );
    this.loadFeatures();
  }
  filterFeatures(title: string = ''): void {
    this.filteredFeatures = this.features.filter((feature: IFeature) => {
      return feature.title.toLowerCase().indexOf(title.toLowerCase()) > -1;
    });
  }

  loadFeatures(): void {
    this._loadingService.register('features.list');
    this._featuresService.query().subscribe((features: IFeature[]) => {
      this.features = features;
      this.filteredFeatures = features;
      this._loadingService.resolve('features.list');
    }, (error: Error) => {
      this._featuresService.staticQuery().subscribe((features: IFeature[]) => {
        this.features = features;
        this.filteredFeatures = features;
        this._loadingService.resolve('features.list');
      });
    });
  }
}
