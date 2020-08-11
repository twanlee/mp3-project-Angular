// @ts-ignore
import {NgModule} from "@angular/core";
// @ts-ignore
import {Routes, RouterModule} from "@angular/router";
import {RegisterComponent} from "./components/register/register.component";
import {ViewSongByUserComponent} from "./components/view-song-by-user/view-song-by-user.component";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user/song-list',
    component: ViewSongByUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
