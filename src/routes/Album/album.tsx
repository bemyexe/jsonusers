import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAlbumPhotos } from "../../components/types/types";
import AlbumPhotos from "../../components/AlbumPhotos/AlbumPhotos";
import classes from "./Album.module.scss";

export default function Album() {
  const { id } = useParams();

  const [albums, setAlbums] = useState<IAlbumPhotos[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/album/${id}/photos`)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, [id]);

  return (
    <div className={classes.photo}>
      {albums.map((album) => (
        <AlbumPhotos album={album} />
      ))}
    </div>
  );
}
