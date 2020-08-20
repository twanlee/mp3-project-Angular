import {NgModule} from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/user/login/login.component';



const routes: Routes = [

  { path: '', redirectTo: '/song', pathMatch: 'full'},
  { path: 'song', loadChildren: () => import('./module/song/song.module').then(m => m.SongModule) },
  { path: 'user', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule) },
  { path: 'playlist', loadChildren: () => import('./module/playlist/playlist.module').then(m => m.PlaylistModule) },
  { path: 'top', loadChildren: () => import('./module/top/top.module').then(m => m.TopModule) },
  { path: 'register', loadChildren: () => import('./module/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'login', component: LoginComponent ,pathMatch: 'full'},
  { path: 'artist', loadChildren: () => import('./module/artist/artist.module').then(m => m.ArtistModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
