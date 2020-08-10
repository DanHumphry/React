import AddNumber from "../components/AddNumber";
import {connect} from 'react-redux';
function mapDispatchToProps(dispatch){
    return{
        onClick:function(size){
            dispatch({type:'INCREMENT', size:size});
        }
    }
}
export default connect(null, mapDispatchToProps)(AddNumber);


// import store from '../store';
// export default class AddNumberRoot extends Component{
//     render(){
//         return <AddNumber onClick={function(size){
//             store.dispatch({type:'INCREMENT', size:size});
//         }.bind(this)}></AddNumber>
//     }
// } 

// containers/AddNumber라는 빈껍데기에 본래의 component/AddNumber에 담겨있는
// store에 종속된 성질만을 빼서 넣어준다. 그러면 component가 가진 종속성을 제거했기
// 때문에 component/AddNumber는 재사용성(부품으로써의 가치를 가질 수 있게되었다)
// 을 가질 수 있게되었다. (래핑)