import UserList from "../../components/UserList/UserList";
import classes from "./Root.module.scss";

export default function Root() {
  return (
    <div className={classes.app}>
      <h1 className={classes.title}>Список пользователей</h1>
      <UserList />
    </div>
  );
}
