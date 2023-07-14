export const autocomplete = (searchQuery) => {
    return {
        type: "AUTOCOMPLETE",
        payload: searchQuery
    }
}