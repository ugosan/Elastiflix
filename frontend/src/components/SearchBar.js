import { SearchProvider, SearchBox } from "@elastic/react-search-ui";
import { useHistory } from "react-router-dom";
import connector from '../services/SearchConnector'; // Import the shared connector

const renderInput = ({ getAutocomplete, getInputProps }) => {
    return (
        <div className="search-box">
            <span className="search-box__icon">🔍</span>
            <input
                {...getInputProps({
                    className: "search-box__input",
                    placeholder: "Search by title, cast name..."
                })}
            />
        {getAutocomplete()}
        </div>
    )
}

function SearchBar() {

    const history = useHistory();

    const configurationOptions = {
        apiConnector: connector, 
        trackUrlState: false,
        alwaysSearchOnInitialLoad: false
    };

    return (
        <SearchProvider config={configurationOptions}>

            <SearchBox
                inputView={renderInput}
                debounceLength={0}
                onSubmit={searchTerm => {
                    history.push("/search?q=" + searchTerm);
                    window.location.href = "/search?q=" + searchTerm;
                }}
            />
        </SearchProvider>
    );
}
export default SearchBar;