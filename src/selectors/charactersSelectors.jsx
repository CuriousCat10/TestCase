const getCharacters = (state) => state.characters;
const getPage = (state) => state.page;
const getPageLimit = (state) => state.pageLimit;
const getName = (state) => state.inputFields.name;
const getBirthdate = (state) => state.inputFields.birthdate;
const getLikes = (state) => state.likes;
const getFilter = (state) => state.filterLiked;
const getIsFetching = (state) => state.isFetching;

export { getCharacters, getPage, getPageLimit, getName, getBirthdate, getLikes, getFilter, getIsFetching };