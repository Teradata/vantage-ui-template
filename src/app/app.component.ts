import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import { TdLoadingService, TD_LOADING_ENTRY_COMPONENTS } from '@covalent/core';

@Component({
  moduleId: module.id,
  selector: 'qs-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  providers: [ TdLoadingService ],
  precompile: [ TD_LOADING_ENTRY_COMPONENTS ],
})
export class AppComponent {

}
