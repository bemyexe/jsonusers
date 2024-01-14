export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface Itodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IAlbums {
  userId: number;
  id: number;
  title: string;
}

export interface IAlbumPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
