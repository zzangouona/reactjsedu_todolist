import React, { Component } from 'react';
import "./Form.css";

class Form extends Component {
    render() {
        const {value, myChange, myCreate, myKeyPress} = this.props;

        return (
            <div className="form">
                <input value={value} 
                    onKeyPress={myKeyPress}
                    onChange = {myChange}/>
                <div className="create-button" onClick={myCreate}>추가</div>
               
            </div>
        );
    }
}

export default Form;