import { ChangeEvent } from "react";
import { IoSearchOutline } from "react-icons/io5";

type SearchType = {
  search: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ search, handleChange }: SearchType) => {
  return (
    <div className="max-sm:w-[19.5rem] max-sm2:w-[23rem] sm:w-[27rem] sm2:w-3/4 lg:w-1/2 xl:w-1/3 h-11 flex gap-3 items-center p-4 bg-[#0D0D0D] rounded-xl">
      <IoSearchOutline className="fill-[#0b8bed]" size={25} />
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent text-sm"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Search;
