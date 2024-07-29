import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useGetUsersQuery } from "../services/apiSlice";
import debounce from "lodash.debounce";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = React.useState("");
  const { data: users = [], isLoading } = useGetUsersQuery();

  const debouncedSearch = React.useCallback(
  debounce((inputValue) => {
      if (inputValue) {
        const results = users.filter((user) =>
          user.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setResults(results);
        console.log("devounce:",results);
      } else {
        setResults([]);
      }
    }, 500), // 500ms debounce delay
    [users]
  );

  React.useEffect(() => {
    debouncedSearch(input);
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
