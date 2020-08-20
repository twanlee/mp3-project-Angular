import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from '../../components/user/user-profile/user-profile.component';
import {AuthGuard} from '../../authorization/auth-guard.service';
import {EditProfileComponent} from '../../components/user/edit-profile/edit-profile.component';
import {UserSongsAndPlaylistComponent} from '../../components/user/user-songs-and-playlist/user-songs-and-playlist.component';
import {ChangePasswordComponent} from '../../components/user/change-password/change-password.component';


const routes: Routes = [
  {path: ":id/profile", component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: ":id/profile/edit", component: EditProfileComponent, canActivate: [AuthGuard]},
  {path: 'music', component: UserSongsAndPlaylistComponent, canActivate: [AuthGuard]},
  {path: 'password/update', component: ChangePasswordComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
