import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateArtistComponent} from '../../components/artists/create-artist/create-artist.component';
import {AuthGuard} from '../../authorization/auth-guard.service';


const routes: Routes = [
  {path: 'create', component: CreateArtistComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
