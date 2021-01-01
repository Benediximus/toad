import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../todosData';

function App() {

    const todoComponents = todosData.map(function(entry) {
        return (
            <TodoItem key={entry.id} item={entry}/>
        )
    })
    return (
        <div className="todo-list">
            {todoComponents}
        </div>
    )
}

export default App