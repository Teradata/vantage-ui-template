import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ItemsService } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'qs-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css'],
  viewProviders: [ ItemsService ],
})
export class DetailComponent implements OnInit {

  item: Object = {};

  constructor(private router: Router, private itemsService: ItemsService, private route: ActivatedRoute) {}

  goBack(): void {
    this.router.navigate(['/dashboard-product']);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: {id: string}) => {
      let itemId: string = params.id;
      this.itemsService.get(itemId).subscribe((item: Object) => {
        this.item = item;
      });
    });
  }
}
