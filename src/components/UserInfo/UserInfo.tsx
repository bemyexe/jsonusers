import { FC } from "react";
import { IUser } from "../types/types";
import classes from "./UserInfo.module.scss";

interface IUserInfoProps {
  user: IUser;
}

const UserInfo: FC<IUserInfoProps> = ({ user }) => {
  return (
    <div className={classes.userinfo}>
      <div className={classes.userid}>ID: {user.id}</div>
      <div>NAME: {user.name}</div>
      <div>USERNAME: {user.username} </div>
      <div>EMAIL: {user.email} </div>
      <div>PHONE: {user.phone} </div>
    </div>
  );
};

export default UserInfo;
