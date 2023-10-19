interface Props {
  search: string;
  setSearch: (str: string) => void;
}

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
      <p>You searched for object: {search}</p>
    </div>
  )
}

export default SearchBar;