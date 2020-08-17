
import {IUser} from './user/user';
import {IReview} from './ireview';
import {ISong} from './isong';

export interface IPlaylist {
  id?: number;
  title?: string;
  pl_songs?: ISong[];
  userCreate?: IUser;
  imgUrl?: string;
  review?: IReview;
}
