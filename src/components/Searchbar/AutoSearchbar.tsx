import { useEffect, useState } from 'react';
import './Searchbar.scss';

interface SearchArgs {
    userId?: number;
    id?: number;
    title?: string;
}

{
    /* onSearch:
    callback function passed from parent (ProductsPage) to child (Searchbar)
    notifies parent with any change in the search fields
    */
}
interface SearchbarProps {
    onSearch: (args: SearchArgs) => void;
}

const AutoSearchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
    const [searchUserId, setSearchUserId] = useState('');
    const [searchId, setSearchId] = useState('');
    const [searchTitle, setSearchTitle] = useState('');

    useEffect(() => {
        const userId = Number(searchUserId);
        const args: SearchArgs = {};
        const id = Number(searchId);
        const title = searchTitle.trim();
        if (searchUserId !== '' && userId >= 0) {
            args.userId = userId;
        }
        if (searchId !== '' && id >= 0) {
            args.id = id;
        }
        if (title !== '') {
            args.title = title;
        }
        onSearch(args);
    }, [searchUserId, searchId, searchTitle, onSearch]);

    return (
        <div className="searchbar">
            <div className="search-by-userid">
                <label htmlFor="userid-input">User ID:</label>
                <input
                    className="userid-input"
                    id="userid-input"
                    type="number"
                    placeholder="userId"
                    value={searchUserId}
                    onChange={(e) => {
                        setSearchUserId(e.target.value);
                    }}
                    min={0}
                />
            </div>
            <div className="search-by-id">
                <label htmlFor="id-input">ID:</label>
                <input
                    className="id-input"
                    id="id-input"
                    type="number"
                    placeholder="id"
                    value={searchId}
                    onChange={(e) => {
                        setSearchId(e.target.value);
                    }}
                    min={0}
                />
            </div>
            <div className="search-by-title">
                <label htmlFor="title-input">Title:</label>
                <input
                    className="title-input"
                    id="title-input"
                    type="text"
                    placeholder="title"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                />
            </div>
        </div>
    );
};

export default AutoSearchbar;
