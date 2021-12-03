import React from 'react';

export default function Header({ filterLiked, setFilterLiked, setPage, onFocus, onBlur }) {

    return (
        <div className="header">
            <div className="title">Персонажи из сериала "Во все тяжкие"</div>
            <div className="checkbox__filter">
                <label className="checkbox__label" htmlFor="id__checkbox">
                    Фильтр понравившихся карточек
                </label>
                <input
                    id="id__checkbox"
                    type="checkbox"
                    checked={filterLiked}
                    onChange={ () => {
                        setPage(1);
                        setFilterLiked(!filterLiked);
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
        </div>
    );
}