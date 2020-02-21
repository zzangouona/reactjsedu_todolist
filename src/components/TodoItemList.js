import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    
    render() {
        const {todos, myToggle, myRemove} = this.props;
        return (
            <div>
                <TodoItem text="할일" checked={false}/>
                <TodoItem text="할일1" checked={true}/>
                <TodoItem text="할일2" checked={false}/>
            </div>
        );
    }
}

export default TodoItemList;