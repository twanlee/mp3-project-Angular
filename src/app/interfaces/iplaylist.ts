import {ISong} from './isong';
import {IUser} from './user/user';

export interface IPlaylist {
  id?: number;
  title?: string;
  pl_songs?: ISong[];
  userCreate?: IUser;
  imgUrl?: string;
}
