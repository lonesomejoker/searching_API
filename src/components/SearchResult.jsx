import "./SearchResult.css";

export const SearchResult = ({ result }) => {
    console.log("name:",result);
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};