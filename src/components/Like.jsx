import React from 'react';
import { mdiThumbUp } from '@mdi/js';
import Icon from '@mdi/react';

export default function Like({ liked, index, setCharacterLike }) {

    const giveLike = (i) => {
        setCharacterLike(i);
    }

    return (
        <Icon
        className="like__icon"
        color={liked ? "#98FB98" : "#A9A9A9"}
        path={mdiThumbUp}
        size="40px"
        onClick={() => giveLike(index)}
        />
    );
}