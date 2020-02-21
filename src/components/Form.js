import React, { Component } from 'react';
import "./Form.css";
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class Form extends Component {
    state = {
        input: ''
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value // input 의 다음 바뀔 값
        });
    }
    handleCreate = () => {
        this.props.addTodo(
            {
                text: this.state.input,
                checked: false,
            });
        this.setState({ input: '' });
    }

    handleKeyPress = (e) => {
        // 눌려짂 키가 Enter 이면 handleCreate 호출
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }
    render() {
        return (
            <div className="form">
                <input value={this.state.input} onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} />
                <div className="create-button" onClick={this.handleCreate}>
                    추가
        </div>
            </div>
        );
    }
};
export default connect(null, { addTodo })(Form);
