import { FC } from "react";
import { IAlbumPhotos } from "../types/types";
import classes from "./ModalContent.module.scss";

interface IModalContentProps {
  onClose: () => void;
  album: IAlbumPhotos;
}

const ModalContent: FC<IModalContentProps> = ({ onClose, album }) => {
  return (
    <div className={classes.modal} onClick={onClose}>
      <img
        className={classes.modal__content}
        onClick={(e) => e.stopPropagation()}
        src={album.url}
      />
    </div>
  );
};

export default ModalContent;
