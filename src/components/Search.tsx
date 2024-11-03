import { TextField } from "@mui/material";

interface SearchProps {
  onSearch: (query: string) => void;
  value: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, value }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <TextField
      label="Search posts"
      variant="outlined"
      fullWidth
      value={value}
      onChange={handleSearch}
    />
  );
};

export default Search;
