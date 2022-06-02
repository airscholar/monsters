import React from 'react';

import './card.style.css';

export const Card = props => (<div className="card-container">
    <img src={`https://robohash.org/${props.monster.id}?size=180x180&set=set3`} alt="monster" />
    <h1 key={props.monster.id}>{props.monster.name}</h1>
    <h2>{props.monster.email}</h2>
</div>)