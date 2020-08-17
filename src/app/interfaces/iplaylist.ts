import {ISong} from './isong';
import {IUser} from './user/user';
import {IReview} from './ireview';

export interface IPlaylist {
  id?: number;
  title?: string;
  pl_songs?: ISong[];
  userCreate?: IUser;
  imgUrl?: string;
  review?: IReview;
}
