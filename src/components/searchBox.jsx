const SearchBox = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        className="border-2 border-gray-300 w-[350px] bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
