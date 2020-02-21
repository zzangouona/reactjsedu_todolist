import axios from 'axios';

//Action TYPE 정의
export const FETCH_TODOS = 'FETCH_TODOS';

//Server 요청 url
const apiurl = "http://localhost:4500/api/todos"

//action 생성 함수 정의
export const fetchAllTodos = () => {
    return (dispatch) => {
        axios.get(apiurl)
            .then(res => dispatch({
                type: FETCH_TODOS,
                payload: res.data
            }))
            .catch(error => {
                console.log(error)
            })
    }
}

//Action type 정의
export const ADD_TODO = "ADD_TODO";
export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post(apiurl, todo)
            .then(res => {
                dispatch({
                    type: ADD_TODO,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                throw (error);
            })
    }
}

//Action type 정의
export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = id => {
    return (dispatch) => {
        axios.delete(`${apiurl}/${id}`)
            .then(res => {
                dispatch({
                    type: REMOVE_TODO,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                throw (error);
            })
    }
}
