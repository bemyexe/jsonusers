import { FC, useState } from "react";
import { IAlbumPhotos } from "../types/types";
import { createPortal } from "react-dom";
import ModalContent from "../ModalContent/ModalContent";
import classes from "./AlbumPhotos.module.scss";

interface IAlbumPhotosProps {
  album: IAlbumPhotos;
}

const AlbumPhotos: FC<IAlbumPhotosProps> = ({ album }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.photo_content}>
      <div>ALBUMID: {album.albumId}</div>
      <div>photo id: {album.id}</div>
      <div className={classes.title}>photo title: {album.title}</div>
      <div>adad</div>
      <img
        onClick={() => setShowModal(true)}
        src={album.thumbnailUrl}
        className={classes.photo}
      />
      {showModal &&
        createPortal(
          <ModalContent album={album} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
};

export default AlbumPhotos;
