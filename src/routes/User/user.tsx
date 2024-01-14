import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAlbums, IUser, Itodo } from "../../components/types/types";
import UserInfo from "../../components/UserInfo/UserInfo";
import UserTodo from "../../components/UserTodo/UserTodo";
import UserAlbum from "../../components/UserAlbum/UserAlbum";
import classes from "./User.module.scss";

export default function User() {
  const { id } = useParams();

  const [user, setUser] = useState<IUser>();
  const [todos, setTodos] = useState<Itodo[]>([]);

  const [albums, setAlbums] = useState<IAlbums[]>([]);

  const handleChangeCheckbox = (newTodo: Itodo) => {
    setTodos(
      todos.map((todo: Itodo) => (todo.id === newTodo.id ? newTodo : todo))
    );
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, [id]);

  return (
    <div className={classes.usercard}>
      <div className={classes.userinfo}>
        {user && <UserInfo user={user} />} {/*why && ?*/}
      </div>
      <div className={classes.todos}>
        <h1 className={classes.todos_title}>TODOS</h1>
        {todos.map((todo: Itodo) => (
          <UserTodo
            key={todo.id}
            todo={todo}
            handleChangeCheckbox={handleChangeCheckbox}
          />
        ))}
        {/*not working on first click*/}
      </div>
      <div className={classes.albums}>
        <h1 className={classes.albums_title}>ALBUMS</h1>
        {albums.map((album: IAlbums) => (
          <>
            <Link
              className={classes.album_link}
              key={album.id}
              to={`/albums/${album.id}`}
            >
              <UserAlbum key={album.id} album={album} />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
