import { Input } from "@mantine/core";
import { useContext, ChangeEvent } from "react";
import AppContext from "../../context/AppContext";
import SearchSvg from "../../assets/Search";

export default function Search() {
  const appContext = useContext(AppContext);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    appContext?.setSearchValue(e.target.value);
  };
  return (
    <Input
      icon={<SearchSvg />}
      value={appContext?.searchValue}
      onChange={handleSearchChange}
      placeholder="Search"
    />
  );
}
