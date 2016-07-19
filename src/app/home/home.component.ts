import { Component, OnInit } from '@angular/core';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { TD_LAYOUT_DIRECTIVES, TdExpansionPanelComponent } from '@covalent/core';
import { TdDigitsPipe, TdBytesPipe, TdTimeAgoPipe } from '@covalent/core';

@Component({
  moduleId: module.id,
  selector: 'qs-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    TdExpansionPanelComponent,
  ],
  pipes: [ TdDigitsPipe, TdBytesPipe, TdTimeAgoPipe ],
})
export class HomeComponent implements OnInit {
  items: Object[];
  resources: Object[];

  ngOnInit(): void {
    this.items = [{
        title: 'Activity Dashboard',
        route: '/dashboard',
        icon: 'dashboard',
        color: 'pink-A200',
        description: 'View a dashboard of latest activity!',
      }, {
        title: 'Manage Users',
        route: '/users',
        icon: 'people',
        color: 'light-blue-700',
        description: 'View an admin management list of users!',
      },
    ];
    this.resources = [{
        title: 'Covalent Documentation',
        link: 'https://teradata.github.io/covalent/',
        icon: 'chrome_reader_mode',
        color: 'purple-700',
        description: 'Detailed docs to use this quickstart app',
      }, {
        title: 'Covalent Github Repo',
        link: 'https://github.com/Teradata/covalent',
        icon: 'code',
        color: 'blue-700',
        description: 'Submit bugs, feature requests and view progress',
      }, {
        title: 'Quickstart Github Repo',
        link: 'https://github.com/Teradata/covalent-quickstart',
        icon: 'flash_on',
        color: 'green-700',
        description: 'Clone this repo to start building your app',
      }, {
        title: 'Covalent Sketch Template',
        link: 'https://dribbble.com/shots/2846624-Covalent-Material-Design-Sketch-Template-Free-download',
        icon: 'view_quilt',
        color: 'orange-700',
        description: 'Covalent Material Design UI Kit for Sketch',
      },
    ];
  }
}
