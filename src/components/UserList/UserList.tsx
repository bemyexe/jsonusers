import { FormEvent, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IUser } from "../types/types";
import UserItem from "../UserItem/UserItem";
import SearchForm from "../SearchForm/SearchForm";
import classes from "./UserList.module.scss";

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("user") || "";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = e.target as HTMLFormElement;
    const query = params.search.value;
    setSearchParams({ user: query });
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div className={classes.search}>
        <SearchForm handleSubmit={handleSubmit} />
      </div>
      <div className={classes.userlist}>
        {users
          .filter(
            (user: IUser) =>
              user.name.toLowerCase().includes(postQuery) ||
              user.email.toLowerCase().includes(postQuery) ||
              user.username.toLowerCase().includes(postQuery) ||
              user.phone.toLowerCase().includes(postQuery)
          )
          .map((user: IUser) => (
            <Link
              className={classes.link}
              key={user.id}
              to={`/users/${user.id}`}
            >
              <UserItem user={user} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default UserList;
