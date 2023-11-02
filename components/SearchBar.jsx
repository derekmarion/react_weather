import { useState } from 'react';

// const [zipCode, setZipCode] = useState('');

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
        />
        <button type="submit">Submit</button>
    </form>
    </div>
    )
}

export default SearchBar;