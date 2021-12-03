import { types as actionTypes } from './actions';

const initialState = {
    characters: [],
    inputFields: {
        name: '',
        birthdate: null
    },
    page: 1,
    pageLimit: 10,
    likes: new Set(),
    dislikes: new Set(),
    filterLiked: false,
    isFetching: false
};

const charactersReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case actionTypes.SET_CHARACTERS: {
            return { ...state, characters: payload };
        }
        case actionTypes.DELETE_CHARACTER: {
            const newCharacters = state.characters.filter((ch) => ch.id !== payload);
            return { ...state, characters: newCharacters };
        }
        case actionTypes.SET_CHARACTER_LIKE: {
            const newLikes = new Set(state.likes);
            if (newLikes.has(payload)) {
                newLikes.delete(payload);
            } else {
                newLikes.add(payload);
            }
            return { ...state, likes: newLikes };
        }
        case actionTypes.SET_FILTER_LIKED: {
            return { ...state, filterLiked: payload };
        }
        case actionTypes.CHANGE_NAME: {
            return { ...state, inputFields: { ...state.inputFields, name: payload } };
        }
        case actionTypes.CHANGE_AGE: {
            return { ...state, inputFields: { ...state.inputFields, age: payload } };
        }
        case actionTypes.SET_PAGE: {
            return { ...state, page: payload };
        }
        case actionTypes.SET_PAGE_LIMIT: {
            const newPage = Math.ceil(state.characters.length/payload);
            return { ...state, pageLimit: payload, page: state.page > newPage ? newPage : state.page};
        }
        case actionTypes.TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: payload };
        }
        default: {
            return state;
        }
    }
}

export default charactersReducer;