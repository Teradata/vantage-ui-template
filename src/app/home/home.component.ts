import { Component, OnInit } from '@angular/core';

import { TdLoadingService } from '@covalent/core';

@Component({
  moduleId: module.id,
  selector: 'qs-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  items: Object[];
  resources: Object[];
  covalentModules: string[];

  constructor(private _loadingService: TdLoadingService) {
  }

  ngOnInit(): void {
    this._loadingService.register('main');
    setTimeout(() => {
      this._loadingService.resolve('main');
    }, 2000);
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
    this.covalentModules = [
      'core',
      'chips',
      'file-upload',
      'highlight',
      'http',
      'json-formatter',
      'markdown',
    ];
  }
}
