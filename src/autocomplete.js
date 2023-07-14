import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from 'react-redux';
import { autocomplete } from './actions/autocomplete';

/**
 * Renders a list of search result.
 * @param {object} searchResult 
 */
const List = ({ searchResult }) => (
    <ul>
        {searchResult.map((result, index) => (
            <li key={index}>
                <h6>{result.title}</h6>
                <span>{result.description}</span>
            </li>
        ))}
    </ul>
);

function AutoComplete() {

    const searchResult = useSelector((state) => state.autoComplete);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(autocomplete(e.target.value));
    }

    return (
        <div className="autocomplete">
            <h2>Auto Complete</h2>
            <TextField onChange={handleChange}
                placeholder="...Search"
            ></TextField>
            {searchResult.length ? <List searchResult={searchResult} /> : ""}
        </div>
    )
}

export default AutoComplete;