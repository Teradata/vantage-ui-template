import { Component, ViewContainerRef } from '@angular/core';

import { TdLoadingService, TdDialogService, LoadingType, ILoadingOptions } from '@covalent/core';

@Component({
  selector: 'qs-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private _loadingService: TdLoadingService,
              private _dialogService: TdDialogService,
              viewContainerRef: ViewContainerRef) {
    let options: ILoadingOptions = {
      name: 'main',
      type: LoadingType.Circular,
    };
    this._loadingService.createOverlayComponent(options, viewContainerRef);
    this._dialogService.setDefaultViewContainerRef(viewContainerRef);
  }

}
