import React,{useState} from 'react';
import TodoClass from '../models/todos';

type TodosContextObj = {
    items: TodoClass[];
    addTodo: (text: string)=>void;
    removeTodo: (id: string)=>void
};

interface Props {
    children: React.ReactNode;
}
  

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<Props> = (props) => {
    const [todosData, setTodosData] = useState<TodoClass[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new TodoClass(todoText);
        setTodosData((prevTodos) => {
          return prevTodos.concat(newTodo);
        });
      };
    
      const removeItemHandler = (todoId: string) => {
        setTodosData((prevTodos)=>{
          return prevTodos.filter((item)=>(item.id !== todoId))
        });
      };

      const contextValue:TodosContextObj = {
        items: todosData,
        addTodo: addTodoHandler,
        removeTodo: removeItemHandler
     }

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )   
};

export default TodosContextProvider;