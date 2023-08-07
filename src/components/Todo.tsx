import React from 'react';

import classes from './Todo.module.css';



const Todo: React.FC<{itemText: string; removeHandler: ()=>void}> = (props) => {
    
    return (
        <li className={classes.item} onClick={props.removeHandler}>{props.itemText}</li>
    )
}

export default Todo;