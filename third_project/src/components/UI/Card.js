import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {

     // if we add className={classes.card}, then it will invoke it's child poperties as well through props.
    // so to separate CSS files of both components we use with backticks here.
    // return <div className={classes.card}>{props.children}</div>

  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;