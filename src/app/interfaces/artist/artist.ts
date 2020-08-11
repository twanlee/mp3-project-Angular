import {ISong} from "../songs/song";

export interface IArtist {
  id?: number;
  fullName?: string;
  information?: string;
  songSings?: ISong[];
  authSongs?: ISong[]

}
