import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'td-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _iconRegistry: MatIconRegistry, private _domSanitizer: DomSanitizer) {
    // SVG Icons
    this._iconRegistry.addSvgIcon(
      'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'),
    );
    this._iconRegistry.addSvgIcon(
      'teradata-dark',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-dark.svg'),
    );
    this._iconRegistry.addSvgIcon(
      'teradata-solid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-solid.svg'),
    );
    this._iconRegistry.addSvgIcon(
      'teradata-icon',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-icon.svg'),
    );
    this._iconRegistry.addSvgIcon(
      'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent.svg'),
    );
  }
}
