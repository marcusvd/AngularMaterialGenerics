import { Injectable, OnInit } from "@angular/core";
import { ClientListService } from "src/app/services/client-list.service";
import { DynamicFlatNode } from "../helpers/DynamicFlatNode";

@Injectable({ providedIn: 'root' })
export class DynamicDatabase implements OnInit {

  constructor(private _clientListService: ClientListService) {

  }

 dataMap = this._clientListService.getDataMap();



  rootLevelNodes: string[] = ['Oracle'];
//  dataMap = new Map<string, string[]>([
//     ['Fruits', ['Apple', 'Orange', 'Banana']],
//     ['Vegetables', ['Tomato', 'Potato', 'Onion']],
//     ['Apple', ['Fuji', 'Macintosh']],
//     ['Onion', ['Yellow', 'White', 'Purple']],
//   ]);



  // rootLevelNodes: string[] = ['Fruits', 'Vegetables'];

  /** Initial data from database */
  initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }



  ngOnInit(): void {

  }


}
