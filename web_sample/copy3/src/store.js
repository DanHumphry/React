import {createStore} from 'redux';
export default createStore(function(state, action){
    if(state === undefined){
        return {number:0}
    }
    if(action.type === 'INCREMENT'){
        return {...state, number:state.number + action.size}
        // ...state는 데이터를 복제하는 방식 , 그리고 복제한 state값을 
        // number:state.number + action.size로 변경하는 모습
        
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 