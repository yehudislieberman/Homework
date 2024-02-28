import React, { useState } from 'react';
import List from './list';

export default function RecipeDetails(props) {
    const [pictureShowing, setPictureShowing] = useState(true);

    const toggleShowPicture = () => {
        setPictureShowing(!pictureShowing);
    };

    const { name, ingredients, directions, picture } = props.recipe;

    return (
        <>
            <h2>{name}</h2>
            <button onClick={toggleShowPicture}>{pictureShowing ? 'hide' : 'show'}</button>
            <br />
            {pictureShowing ? <img src={picture} style={{ width: '200px' }} alt={name} /> : null}
            <List name="ingredients" items={ingredients} />
            <List name="directions" items={directions} />
        </>
    );
}

