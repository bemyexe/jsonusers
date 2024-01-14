import { FC } from "react";
import { IUser } from "../types/types";
import classes from "./UserItem.module.scss";

interface IUserItemProps {
  user: IUser;
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
  return (
    <div className={classes.user}>
      <div className={classes.usercard}>
        {user.id}. {user.name}
      </div>

      <div className={classes.full}>
        / {user.username} / {user.email} / {user.phone}
      </div>
    </div>
  );
};

export default UserItem;
