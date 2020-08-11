import {IArtist} from './iartist';

export interface ISong {
  name?: string;
  lyric?: string;
  fileUrl?: string;
  imageUrl?: string;
  description?: string;
  authors?: IArtist[];
  singers?: IArtist[];
}

