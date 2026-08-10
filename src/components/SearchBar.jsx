function SearchBar({ searchText, setSearchText }) {

    return (
        <input 
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText.target.value}
        />
    );
}

export default SearchBar;