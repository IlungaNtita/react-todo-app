import React from 'react';

const Todo = ({text, completed, id, todo, todos, setTodos}) => {
    // events
    const deleteHandler = () => {
        // filter removes contents from the array while also creating a new array
        setTodos(todos.filter((el ) => el.id !== todo.id))
        console.log('todo', todo)
    }

    const completedHandler = () => {
        // map creates a new array
        setTodos(todos.map((element) => {
            if(element.id === todo.id ){
                return {
                    ...element, completed: !element.completed
                }
            }
            return element;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completedHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
};

export default Todo;