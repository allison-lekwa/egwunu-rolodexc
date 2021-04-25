import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className="card-container">
    <img alt="egwunu" src={`https://robohash.org/${props.egwunu.id}?set=set2&size=180x180`}/>
    <h2>{props.egwunu.name}</h2>
    <p>{props.egwunu.email}</p>
  </div>
); 