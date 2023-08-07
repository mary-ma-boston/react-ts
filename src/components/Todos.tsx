import React, {useContext}from 'react';

import Todo from './Todo';
import { TodosContext } from '../store/todos-context';

import classes from './Todos.module.css';

const Todos: React.FC = () =>{

    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item)=> (
                <Todo 
                    key={item.id} 
                    itemText={item.text} 
                    removeHandler={todosCtx.removeTodo.bind(null, item.id)} />
            ))
            }
        </ul>
    );
}

export default Todos;