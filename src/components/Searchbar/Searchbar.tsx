import { useState } from 'react';
import './Searchbar.scss';

{
    /* onSearch:
    callback function passed from parent (ProductsPage) to child (Searchbar)
    notifies parent when "search" is clicked
    used in child:
        - onClick={() => onSearch(searchId)}
        - calls parent's function when user acts
    defined in parent:
        - onSearch={(id: string) => {setApplySearch(id); setCurrentPage(1)}
        - sets parent's state
    
    */
}

const Searchbar: React.FC<{ onSearch: (id: string) => void }> = ({
    onSearch,
}) => {
    const [searchId, setSearchId] = useState('');
    return (
        <div className="searchbar">
            <div className="search-by-id">
                <label htmlFor="id-input">ID:</label>
                <input
                    className="id-input"
                    id="id-input"
                    type="text"
                    placeholder="id"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
            </div>
            <button className="search-btn" onClick={() => onSearch(searchId)}>
                Search
            </button>
        </div>
    );
};

export default Searchbar;
