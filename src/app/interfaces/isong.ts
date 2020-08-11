import {IArtist} from './iartist';

export interface ISong {
  id: number;
  name: string;
  lyric: string;
  fileUrl: string;
  imageUrl: string;
  description: string;
  authors: IArtist[];
  singers: IArtist[];
  fileSong: File;
  fileImage: File;
}

