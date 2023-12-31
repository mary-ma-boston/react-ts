import {useRef, useContext} from 'react';

import { TodosContext } from '../store/todos-context';

import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {

    const todoCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        todoCtx.addTodo(enteredText);
        todoTextInputRef.current!.value = '';

       
    };


    return (
        <form className = {classes.form} onSubmit={submitHandler}>
            <label htmlFor = 'text'>Todo text</label>
            <input ref={todoTextInputRef} type='text' id='text'/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;