import { FlatTreeControl } from "@angular/cdk/tree";
import { Component } from "@angular/core";
import { DynamicDatabase } from "../services/DynamicDatabase";
import { DynamicDataSource } from "../helpers/DynamicDataSource";
import { DynamicFlatNode } from "../helpers/DynamicFlatNode";


@Component({
  selector: 'tree-g',
  styles:[`
  .example-tree-progress-bar {
    margin-left: 30px;

  }`],
  templateUrl: './tree-g.component.html',
})
export class TreeGComponent {
  constructor(database: DynamicDatabase) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    this.dataSource.data = database.initialData();
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
}
