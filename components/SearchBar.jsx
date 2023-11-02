import { useState } from 'react';

function SearchBar (props) {
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(searchInput); //passes the input value to the parent component;
    };
    
    return (
    <div>
    <form onSubmit={handleSubmit}>  
    {/* need a way here to call setZipCode to the user's input */}
        <input 
        type="text" 
        value={searchInput}
        onChange={handleInputChange}
        class='border-2'
        />
        <button type="submit" class='border-1 px-3 m-2'>Submit</button>
    </form>
    </div>
    )
}

export default SearchBar;