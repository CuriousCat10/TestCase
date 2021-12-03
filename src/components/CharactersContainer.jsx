import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../reducer/actions';
import { getCharacters, getName, getBirthdate, getPage, getPageLimit, getIsFetching, getLikes, getFilter } from '../selectors/charactersSelectors';
import { getCharactersAPI } from '../api/get_characters.tsx';
import Characters from './Characters';
import Pagination from './Pagination';
import Header from './Header';
import '../style/characters.css';

function CharactersContainer ({ 
    name, 
    birthdate, 
    page, 
    pageLimit, 
    totalCount, 
    characters,
    likes, 
    filterLiked, 
    isFetching,
    setCharacters, 
    deleteCharacter, 
    setCharacterLike,
    setFilterLiked, 
    setPage, 
    setPageLimit, 
    changeName, 
    changeAge, 
    toggleIsFetching }) {
    
    useEffect(() => {
        toggleIsFetching(true);
        getCharactersAPI()
            .then((response) => {
                setCharacters(response);
                toggleIsFetching(false);
            })
            .catch(() => {
                toggleIsFetching(false);
            })
    }, [])
     
    return (
        <div className="app">
            <Header filterLiked={filterLiked} setFilterLiked={setFilterLiked} setPage={setPage} />
            <Characters characters={characters} name={name} birthdate={birthdate} likes={likes} isFetching={isFetching} changeName={changeName} changeAge={changeAge} setCharacterLike={setCharacterLike} deleteCharacter={deleteCharacter} />
            <Pagination page={page} pageLimit={pageLimit} totalCount={totalCount} setPage={setPage} setPageLimit={setPageLimit} />
        </div>
    );
}

const mapStateToProps = (state) => {

    const page = getPage(state.charactersPage);
    const pageLimit = getPageLimit(state.charactersPage);
    const likes = getLikes(state.charactersPage);
    const filterLiked = getFilter(state.charactersPage);
    const characters = filterLiked 
        ? getCharacters(state.charactersPage).filter((ch) => likes.has(ch.id) ) 
        : getCharacters(state.charactersPage);

    return {
        characters: characters.slice((page - 1) * pageLimit, page * pageLimit),
        name: getName(state.charactersPage),
        birthdate: getBirthdate(state.charactersPage),
        page: page,
        pageLimit: pageLimit,
        likes: likes,
        isFetching: getIsFetching(state.charactersPage),
        filterLiked: filterLiked,
        totalCount: characters.length
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer);
