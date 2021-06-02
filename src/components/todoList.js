import React from 'react'
import ToDo from './todo'

const TodoList = ( { todos, setTodos } ) => {
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {
                todos.map(todo => (
                    <ToDo key = {todo.id}
                         text = {todo.text}
                         todos = {todos}
                         setTodos = {setTodos}
                         todo = {todo} />
                ))
            }
        </ul>
        </div>
    )
}


export default TodoList;