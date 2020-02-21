import React, { Component } from 'react';
import "./TodoItem.css"
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions';
class TodoItem extends Component {
    handleRemove = (id) => {
        this.props.removeTodo(id);
    }
    handleToggle = (todo) => {
        this.props.toggleTodo(todo)
    }
    render() {
        const { id, text, checked } = this.props;
        return (
            <div className="todo-item" onClick={() => {
                const todo = { id, text, checked };
                todo.checked = !todo.checked;
                this.handleToggle(todo)
            }}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    this.handleRemove(id)
                }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {checked && (<div className="check-mark">✓</div>)}
            </div>
        );
    }
}
export default connect(null, { removeTodo, toggleTodo })(TodoItem);