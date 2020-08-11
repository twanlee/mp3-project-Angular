// @ts-ignore
import {NgModule} from "@angular/core";
// @ts-ignore
import {Routes, RouterModule} from "@angular/router";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
