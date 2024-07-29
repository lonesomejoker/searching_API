import React from 'react'
import "./SearchBar.css"
import { FaSearch } from "react-icons/fa";
import { useGetUsersQuery } from '../services/apiSlice';

const SearchBar = ({setResults}) => {
    const [input, setInput] = React.useState("");
    const {data:users=[],isLoading}=useGetUsersQuery();

    React.useEffect(() => {
        if (input) {
          const results = users.filter((user) =>
            user.name.toLowerCase().includes(input.toLowerCase())
          );
          setResults(results);
          //console.log("searching:",results);
        } else {
          setResults([]);
        }
      }, [input]);
      
      const handleChange=(e)=>{
        setInput(e.target.value)
      }

  return (
    <div className="input-wrapper">
    <FaSearch id="search-icon" />
    <input placeholder="Type to search..." value={input} onChange={handleChange} />
  </div>
  )
}

export default SearchBar
