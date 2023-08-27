import { HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { IRadiosDictionary } from 'src/company/shared/components/radio-button-g/interfaces/Iradios-dictionary';

import { BackEndService } from 'src/company/shared/services/back-end/backend-service';

@Component({
  selector: 'tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit, AfterViewInit {

  entities: any;
  @Input() pageSizeOptions: number[] = [5, 10, 20];
  @Input() pageSize: number = 10;
  @Input() columnsFields: string[] = ['id', 'name'];
  @Input() columnsNamesToDisplay: string[] = ['Código', 'Nome'];
  @Input() url: string = "customers/GetAllPagedCustomersAsync";


  constructor(
    // public _tableGV2Service: TableGV2Service,
    private _route: ActivatedRoute,
  ) { }


  ngAfterViewInit(): void {

  }


  header: string[] = ['Dispositivo', 'Fabricante', 'Modelo', 'Quantidade', 'Estado']
  device: any[] = [
    { device: 'Rede', manufacturer: 'Realtek', model: 'S5EFD58', quantity: '25', isNew: 'Nova' },
    { device: 'Rede', manufacturer: 'D-link', model: 'ADAD626', quantity: '50', isNew: 'Nova' },
    { device: 'Rede', manufacturer: 'Tp-Link', model: '5855F8', quantity: '75', isNew: 'Nova' },
    { device: 'Rede', manufacturer: '3COM', model: 'CXCS515', quantity: '80', isNew: 'Nova' },
    { device: 'Rede', manufacturer: 'Cisco', model: 'EEEEE999AS8A', quantity: '63', isNew: 'Nova' },
    { device: 'Rede', manufacturer: 'Atheros', model: '8139A', quantity: '41', isNew: 'Nova' },
    { device: 'Rede', manufacturer: 'Intel', model: '8139B', quantity: '80', isNew: 'Nova' },

    { device: 'Video', manufacturer: 'Nvidea', model: 'S5EFD58', quantity: '25', isNew: 'Nova' },
    { device: 'Video', manufacturer: 'Trident', model: 'ADAD626', quantity: '50', isNew: 'Nova' },
    { device: 'Video', manufacturer: 'Tp-Link', model: '5855F8', quantity: '75', isNew: 'Nova' },
    { device: 'Video', manufacturer: 'Msi', model: 'CXCS515', quantity: '80', isNew: 'Nova' },
    { device: 'Video', manufacturer: 'Intel', model: '8139B', quantity: '80', isNew: 'Nova' },

    { device: 'HD SSD', manufacturer: 'Kingstor', model: 'S5EFD58', quantity: '85', isNew: 'Nova' },
    { device: 'HD SSD', manufacturer: 'SanDisk', model: 'ADAD626', quantity: '5', isNew: 'Nova' },
    { device: 'HD SSD', manufacturer: 'Seagate', model: '5855F8', quantity: '7', isNew: 'Nova' },
    { device: 'HD SSD', manufacturer: 'Western Digital', model: 'CXCS515', quantity: '80', isNew: 'Nova' },




  ]




  paramsTo(pageIndex: number = 1, pageSize: number = 10) {
    let params = new HttpParams();
    params = params.append('pgnumber', pageIndex);
    params = params.append('pgsize', pageSize);
    params = params.append('companyid', JSON.parse(localStorage.getItem('companyId')));

    return params;
  }

  length: number;
  lengthCustomer: number;
  lengthPartner: number;
  ngOnInit(): void {

    // this._tableGV2Service.loadAllPaged$<any[]>("customers/GetAllPagedCustomersAsync", this.paramsTo())
    //   .subscribe((entities: any) => {
    //     console.log(entities)
    //     this.entities = entities.body;
    //   })


    this._route.data.subscribe({
      next: (item: any) => {
        // console.log(item.loaded['customersLength'])
        this.length = item.loaded;
        // this.lengthCustomer = item.loaded['customersLength'];
        // this.lengthPartner = item.loaded['partnersLength'];
      }
    });
  }

//Radio Button

selectedRadio: string;
  radioChose($event: any) {
    switch ($event) {
      case 'customer':
        this.selectedRadio = $event;

        this.url = 'customers/GetAllPagedCustomersAsync'
        break;

      case 'partner':
        this.selectedRadio = $event;

        this.url = 'partners/GetAllPagedPartnersAsync'
        break;

      case 'others':
        this.selectedRadio = $event;

        this.url = null

        break;
    }
  }


  radiosEntitiesDic(value: string): IRadiosDictionary<string> {

    let entitiesPlace: IRadiosDictionary<string> =
      { "C,Não cadastrado": "others", "B,Parceiro": "partner", "A,Cliente": "customer" }

    let entitiesCharge: IRadiosDictionary<string> = { "B,Parceiro": "partner", "A,Cliente": "customer" }

    if (value === 'place')
      return entitiesPlace;

    if (value === 'charge')
      return entitiesCharge;

    return entitiesPlace;
  }









}
