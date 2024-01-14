import { FC } from "react";
import classes from "./SearchInput.module.scss";
interface ISearchInputProps {}

const SearchInput: FC<ISearchInputProps> = ({ ...props }) => {
  return (
    <input
      className={classes.input}
      type="search"
      name="search"
      placeholder="type.."
      {...props}
    />
  );
};

export default SearchInput;
