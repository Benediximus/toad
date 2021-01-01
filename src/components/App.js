import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../todosData';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todoComponents = this.state.todos.map(function(entry) {
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
}

export default App