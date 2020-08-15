import {ISong} from './isong';

export interface IArtist {
  id?: number;
  fullName?: string;
  information?: string;
  avatarUrl?: string;
  songSings?: ISong[];
  authSongs?: ISong[]
}
