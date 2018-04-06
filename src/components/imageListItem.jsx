import React from 'react';

export const ImageListItem = props => (
    <div className="imageListItem">
        <img src={props.thumbnail} className="thumbnail z-depth-5"/>
    </div>
);