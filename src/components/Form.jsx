import React from 'react';

// const Form = (props) => {
const Form = ({setInputText, inputText, setTodos, todos, setStatus, status}) => {
    const inputTextHandler = (e) => {
        setInputText( e.target.value )
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        // using javascript spread to append todos
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText("")
    }
    const setStatusHandler = (e) => {
        setStatus(e.target.value)
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" onChange={setStatusHandler} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;