import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogQuizGComponent } from 'src/company/shared/components/dialog-quiz-g/dialog-quiz-g.component';

@Component({
  selector: 'tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  arrayToCardTest = [
    { title: 'Titulo1', subTitle: 'sub titulo1', content: 'conteúdo1', btnText1: 'ok', btnText2: 'cancelar' },
    { title: 'Titulo2', subTitle: 'sub titulo2', content: 'conteúdo2', btnText1: 'ok', btnText2: 'cancelar' },
    { title: 'Titulo3', subTitle: 'sub titulo3', content: 'conteúdo3', btnText1: 'ok', btnText2: 'cancelar' },
    { title: 'Titulo4', subTitle: 'sub titulo4', content: 'conteúdo4', btnText1: 'ok', btnText2: 'cancelar' },
    { title: 'Titulo5', subTitle: 'sub titulo5', content: 'conteúdo5', btnText1: 'ok', btnText2: 'cancelar' },
    { title: 'Titulo6', subTitle: 'sub titulo6', content: 'conteúdo6', btnText1: 'ok', btnText2: 'cancelar' }
  ];



  constructor() { }



  ngOnInit(): void {
  }

}
