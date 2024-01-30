import { FC } from "react";
import { IAlbums } from "../types/types";
import classes from "./UserAlbum.module.scss";

interface IUserAlbumProps {
  album: IAlbums;
}

const UserAlbum: FC<IUserAlbumProps> = ({ album }) => {
  return (
    <div className={classes.album}>
      <div>album UserID: {album.userId}</div>
      <div>album ID: {album.id}</div>
      <div>album title: {album.title}</div>
    </div>
  );
};

export default UserAlbum;
