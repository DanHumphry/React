import Navi from "../component/Navi";
import {connect} from 'react-redux';
function mapDispatchToProps(dispatch){
    return{
        onClick:function(id){
            dispatch({mode:'read', select_content_id:id});
        }
    }
}
export default connect(null, mapDispatchToProps)(Navi);