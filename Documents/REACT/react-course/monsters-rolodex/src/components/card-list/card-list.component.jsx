import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component'

export const CardList = props => (
    <div className='card-list'>
        {props.egwunu.map(egwunu => (
            <Card key={egwunu.id} egwunu={egwunu} />
        ))}

    </div>
)