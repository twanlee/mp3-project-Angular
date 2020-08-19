import {IArtist} from './iartist';
import {IReview} from './ireview';
import {IUser} from './user/user';

export interface ISong {
  id?: number;
  name?: string;
  lyric?: string;
  fileUrl?: string;
  imageUrl?: string;
  description?: string;
  s_authors?: IArtist[];
  s_singers?: IArtist[];
  postTime?: Date;
  userCreate?: string;
  review?: IReview;
  user?: IUser;
}

