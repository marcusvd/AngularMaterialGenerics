import { Component, Input, OnChanges, OnInit, SimpleChanges, AfterContentChecked, AfterViewInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { ClientListService } from 'src/app/services/client-list.service';
import { GridGComponent } from 'src/company/shared/components/grid-g/component/grid-g.component';
import { Tile } from 'src/company/shared/components/grid-g/interfaces/tile';
import { ClientDto } from 'src/company/shared/components/table-g/dtos/client-dto';


@Component({
  selector: 'testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements OnInit, AfterContentChecked, AfterViewInit, AfterContentInit {

  show: boolean;
  //tree
  dataMap = new Map<string, string[]>([]);
  rootLevelNodes: string[] = [];
  //grid
  numberGridCols: number = 12;
  rowHeight: number | string = 100;
  gridBackGroundColor: string = 'transparent';
  gridTextColor: string = 'green';

  entities: ClientDto[] = [];
  entity: ClientDto;
  tiles: Tile[] = [];
  constructor(
    public _clientListService: ClientListService,
    private _actRoute: ActivatedRoute,

  ) {
    // this._clientListService.getByIdAsyncIncluded$(1).subscribe((client: ClientDto) => {
    //   this.entity = client
    //   this._database.rootLevelNodes.push(client?.name);
    //   this._database.dataMap.set(client?.name, [client?.cnpj, client?.payment.toLocaleString()])
    //   //Via HTML
    //   //   this.rootLevelNodes.push(client.name);
    //   //  this.dataMap.set(client.name, [client.cnpj, client.payment.toLocaleString()])

    //   //Via Services


    //   //mixed static with dynamic
    //   // this.dataMap.set('Oracle', ['teste'])


    //   //via services
    //   // this._database.dataMap.set(client.name, [client.cnpj, client.payment.toLocaleString()])

    // })
  }
  ngAfterContentInit(): void {


  }
  ngAfterViewInit(): void {


  }

  ngAfterContentChecked(): void {


  }

  ngOnInit(): void {
    this.show = true;



    this._actRoute.data.subscribe((client: any) => {
      const toTree: ClientDto = client.loaded;
      this.dataMap.set(toTree?.name, [toTree?.cnpj, toTree?.payment.toLocaleString()]);
      this.rootLevelNodes.push(toTree?.name)
      // this._database.rootLevelNodes.push(toTree?.name);
      // this._database.dataMap.set(toTree?.name, [toTree?.cnpj, toTree?.payment.toLocaleString()])
      console.log(toTree)

    })




    // this._clientListService.getAllAsync$().subscribe((entities: ClientDto[]) => {
    //   this.entities = entities

    //   entities.forEach(
    //     (ent: ClientDto) => {
    //       if (ent.name == 'Microsoft') {
    //         this.tiles.push({ backGroundColor: 'black', textColor: 'red', numberCols: 3, numberRows: 2, text: ent.name })
    //       }
    //       if (ent.name == 'Oracle') {
    //         this.tiles.push({ backGroundColor: 'black', textColor: 'red', numberCols: 3, numberRows: 2, text: ent.name })
    //       }
    //       if (ent.name == 'NASA') {
    //         this.tiles.push({ backGroundColor: 'black', textColor: 'red', numberCols: 3, numberRows: 2, text: ent.name })
    //       }
    //       if (ent.name == 'Amazon') {
    //         this.tiles.push({ backGroundColor: 'black', textColor: 'red', numberCols: 3, numberRows: 2, text: ent.name })
    //       }
    //       //  this.tiles.push({ backGroundColor: 'orange', textColor: 'black', numberCols: 3, numberRows: 3, text: ent.name })
    //       // this.tiles.push({ backGroundColor: 'Salmon', textColor: 'red', numberCols: 1, numberRows: 1, text: ent.name })
    //       // this.tiles.push({ backGroundColor: 'green', textColor: 'red', numberCols: 1, numberRows: 1, text: ent.name })
    //     }
    //   )

    // })
    // this.tiles.push({ backGroundColor: 'white', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo1' })
    // this.tiles.push({ backGroundColor: 'black', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo2' })
    // this.tiles.push({ backGroundColor: 'Salmon', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo3' })
    // this.tiles.push({ backGroundColor: 'green', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo4' })
    // this.tiles.push({ backGroundColor: 'yellow', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo5' })
    // this.tiles.push({ backGroundColor: 'silver', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo6' })
    // this.tiles.push({ backGroundColor: 'purple', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo7' })
    // this.tiles.push({ backGroundColor: 'violet', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo8' })
    // this.tiles.push({ backGroundColor: 'green', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo9' })
    // this.tiles.push({ backGroundColor: 'pink', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo10' })
    // this.tiles.push({ backGroundColor: 'brown', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo11' })
    // this.tiles.push({ backGroundColor: 'orange', textColor: 'white', numberCols: 1, numberRows: 5, text: 'Titulo12' })
  }





  test() {
    // rootLevelNodes
  }



}

