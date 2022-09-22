import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClientResolver } from "src/testing/resolvers/client-resolve";
import { TestingComponent } from "../component/testing.component";


const route = [
  { path: 'tree/:id', component: TestingComponent, resolve:{loaded: ClientResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})

export class TestingRoutingModule { }
