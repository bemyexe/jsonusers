import { ChangeEvent, FC, useState } from "react";
import { Itodo } from "../types/types";
import classes from "./UserTodo.module.scss";

interface IUserTodoProps {
  todo: Itodo;
  handleChangeCheckbox: (newTodo: Itodo) => void;
}

const UserTodo: FC<IUserTodoProps> = ({ todo, handleChangeCheckbox }) => {
  const [todoUser, setTodoUser] = useState<Itodo>({
    userId: todo.userId,
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
  });

  const newTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoUser({ ...todoUser, completed: e.target.checked });
    handleChangeCheckbox(todoUser);
  };

  return (
    <div className={classes.todo}>
      <div>todo UserId: {todo.userId}</div>
      <div>todo id: {todo.id}</div>
      <div className={classes.title_content}>
        <input type="checkbox" checked={todo.completed} onChange={newTodo} />
        <div>todo title: {todo.title}</div>
      </div>
    </div>
  );
};

export default UserTodo;
