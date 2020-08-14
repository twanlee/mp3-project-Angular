import {IArtist} from './iartist';
import {IReview} from './ireview';

export interface ISong {
  id?: number;
  name?: string;
  category?: string;
  lyric?: string;
  fileUrl?: string;
  imageUrl?: string;
  description?: string;
  authors?: IArtist[];
  singers?: IArtist[];
  postTime?: Date;
  userCreate?: string;
  review?: IReview;
}

