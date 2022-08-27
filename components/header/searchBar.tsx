import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { FC, FormEventHandler, useState } from "react";
import styled from "styled-components";
import DropDownSelector from "./dropDownSelector";

const SearchBarForm = styled.form`
  display: flex;
  width: 37.0625rem;
  margin: 0 1rem;
`;

const Search = styled.input<ISearchBar>`
  font-family: Roboto;
  height: 2.875rem;
  width: 69%;
  border-radius: 0.0625rem 0 0 0.0625rem;
  padding-left: 0.875rem;
  border: none;
  outline: none;

  ${({ white }) =>
    white ? "border: 1px solid #e8e8e8;border-right:none;" : "border-right: 1px solid #e8e8e8;"}
`;

const SearchButton = styled.button`
  height: 2.875rem;
  width: 2.875rem;
  border: none;
  outline: none;
  background-color: #ffd200;
  border-radius: 0 0.0625rem 0.0625rem 0;
  font-size: 0.875rem;
  svg {
    margin-left: 0.3125rem;
  }
  flex-shrink: 0;
  cursor: pointer;
`;

interface ISearchBar {
  white?: boolean;
}

const SearchBar: FC<ISearchBar> = ({ white }) => {
  const [category, setCategory] = useState<
    null | "Laptop" | "Smartphone" | "Tablet" | "Console" | "Headphones"
  >(null);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push(`/items${category ? `/${category}` : ""}${query ? `?search=${query}` : ""}`);
  };

  return (
    <SearchBarForm onSubmit={submit}>
      <Search
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        white={white}
        placeholder="Search..."
      />
      <DropDownSelector category={category} setCategory={setCategory} white={white} />
      <SearchButton type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchButton>
    </SearchBarForm>
  );
};

export default SearchBar;
