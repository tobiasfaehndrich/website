import React from 'react';
export const Emoji = props => (
    <span
        className="emoji"
        role="img"
    >
        {props.symbol}
    </span>
);