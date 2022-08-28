import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { InventoryToView } from '../../table-g/dtos/inventory-to-view';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Table with expandable rows
 */

@Component({
  selector: 'table-expandable',
  styleUrls: ['paginated-table-g-expandable.component.css'],
  templateUrl: 'paginated-table-g-expandable.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})




export class PaginatedTableGExpandable implements OnInit {
  // @Input() ELEMENT_DATA = [];


  @Input() columnsToDisplay = [];

  @Input() dataSource = new MatTableDataSource<InventoryToView>(null);

  // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: InventoryToView | null;
  ngOnInit(): void {
    console.log(this.dataSource)
  }
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   description: string;
// }

