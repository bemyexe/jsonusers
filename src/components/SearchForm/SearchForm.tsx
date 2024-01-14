import { FC, FormEvent } from "react";
import SearchButton from "../UI/SearchButton/SearchButton";
import SearchInput from "../UI/SearchInput/SearchInput";

interface ISearchFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SearchForm: FC<ISearchFormProps> = ({ handleSubmit }) => {
  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <SearchInput />
        <SearchButton>Search</SearchButton>
      </form>
    </>
  );
};

export default SearchForm;
