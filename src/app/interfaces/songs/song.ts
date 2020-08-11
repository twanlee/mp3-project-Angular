import {IArtist} from "../artist/artist";

export interface ISong {
  id?: number;
  name?: string;
  lyric?: string;
  fileUrl?: string;
  imageUrl?: string;
  description?: string;
  s_authors?: IArtist[];
  s_singers?: IArtist[];
}
