import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/auth/authentication.service';
import {SongService} from '../services/songs/song.service';
import {ISong} from '../interfaces/isong';
import {IPlaylist} from '../interfaces/iplaylist';
import {PlaylistService} from '../services/playlist/playlist.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  profile: string = 'profile';
  edit: string = 'edit';
  song: string = 'song';
  delete: string = 'delete';
  playlist: string = 'playlist';
  add: string = 'add';

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private songService: SongService,
              private playlistService: PlaylistService) {
  }

  checkPermission(target: string, str: string[]): boolean {
    for (let i = 0; i < str.length; i++) {
      if (target == str[i]) {
        return true;
      }
    }
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    let str = route.url.toString().split(',');

    if (currentUser) {
      // check if route is restricted by role
      if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
        // role not authorised so redirect to home page
        this.router.navigate(['/']);
        return false;
      }
      if (this.checkPermission(this.profile, str) && this.checkPermission(this.edit, str)) {
        if ((+route.paramMap.get('id')) != currentUser.id) {
          this.router.navigate(['/']);
          return false;
        }
      }
      if (this.checkPermission(this.song, str) && this.checkPermission(this.edit, str) || this.checkPermission(this.delete, str)) {
        let songId = + route.paramMap.get("id");
        let currentSong: ISong;
        this.songService.getSongById(songId).subscribe(data => {
          currentSong=data;
          let userId = currentSong.user.id;

          if (userId != currentUser.id) {
            this.router.navigate(['/']);
            return false;
          }
        });
      }
      if(this.checkPermission(this.playlist, str) && this.checkPermission(this.add,str)){
        let playlistId = +route.paramMap.get('id');
        let currentPlaylist: IPlaylist;
        this.playlistService.getPlayListById(playlistId).subscribe(data =>{
          currentPlaylist = data;
          let userId = currentPlaylist.userId;

          if (userId != currentUser.id) {
            this.router.navigate(['/']);
            return false;
          }
        })
      }

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }

}
