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
            type:FETCH_TODOS,
            payload:res.data
        }))
        .catch(error => {
            console.log(error)
        })
    }
}