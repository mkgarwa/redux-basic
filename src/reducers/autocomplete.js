import data from '../database.json';

const initialState = null;

const autoComplete = (state = initialState, action) => {
    if(action.type === "AUTOCOMPLETE") {
        const searchQuery = action.payload;
        if(searchQuery === "" || searchQuery.length <= 2) return {};
        return filteredResult(searchQuery);
    } else {
        return {};
    }
}

const filteredResult = (searchQuery) => {
    const inputWordList = searchQuery.match(/\w+|"[^"]+"/g);
        inputWordList.push(searchQuery);

        return data.filter((data) => {
            const filterdValue = JSON.stringify(Object.values(data)).toLowerCase();
            return inputWordList.every(result => filterdValue.includes(result));
        });
}

export default autoComplete;