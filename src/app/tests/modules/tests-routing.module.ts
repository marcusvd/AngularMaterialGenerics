import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestsComponent } from '../tests.component';
import { CollectDeliverCreateResolver } from '../resolver/collect-deliver.resolver';

const routes: Routes = [
  {path:'tests-component/:id', component:TestsComponent, resolve:{loaded:CollectDeliverCreateResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule { }
