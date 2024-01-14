import { FC } from "react";
import classes from "./SearchButton.module.scss";

interface ISearchButtonProps {
  children: string;
}

const SearchButton: FC<ISearchButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.button}>
      {children}
    </button>
  );
};

export default SearchButton;
