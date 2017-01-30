import { Component, AfterViewInit } from '@angular/core';

import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'covalent-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailTemplateComponent implements AfterViewInit {

  constructor(public media: TdMediaService) {

  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
  }

}
