import { Component, ViewContainerRef } from '@angular/core';

import { TdLoadingService, LoadingType, ILoadingOptions } from '@covalent/core';

@Component({
  moduleId: module.id,
  selector: 'qs-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {

  constructor(private _loadingService: TdLoadingService, viewContainerRef: ViewContainerRef) {
    let options: ILoadingOptions = {
      name: 'main',
      type: LoadingType.Circular,
    };
    this._loadingService.createOverlayComponent(options, viewContainerRef);
  }

}
