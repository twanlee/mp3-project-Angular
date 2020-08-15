import {IArtist} from './iartist';


export interface ISong {
  id?: number;
  name?: string;
  category?: string;
  lyric?: string;
  fileUrl?: string;
  imageUrl?: string;
  description?: string;
  s_authors?: IArtist[];
  s_singers?: IArtist[];
  postTime?: Date;
  userCreate?: string;
}

