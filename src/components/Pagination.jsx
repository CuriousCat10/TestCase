import React, { useMemo } from 'react';

export default function Pagination({ page, totalCount, pageLimit, setPage, setPageLimit }) {
    
    const pageAmount = useMemo(() =>Math.ceil(totalCount/pageLimit), [totalCount, pageLimit]);

    const pages = [];
    const possibleLimits = [10, 15, 20];

    const options = possibleLimits.map((limit, i) => (
        <option key={limit} value={limit}>
          {limit}
        </option>
    ));

    for (let i = 1; i <= pageAmount; i++) {
        pages.push(<button onClick={() => setPage(i)} disabled={i === page} >{i}</button>);
    };

    return (
        <div className="footer">
            <div className="pages__element">
                {pages}
            </div>
            <div className="limit__selection">
                <label className="limit__selection-label" htmlFor="id__limit">
                    Количество карточек на странице
                </label>
                <select
                    className="limit__selection"
                    disabled={options.length < 2 || false}
                    onChange={(e) => setPageLimit(e.target.value)}
                    value={pageLimit}
                >
                    {options}
                </select>
            </div>
        </div>
    );
}