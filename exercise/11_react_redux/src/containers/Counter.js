/* eslint-disable */
import {connect} from 'react-redux';
import Counter from '../components/Counter';

const mapStateToProps=state=>({
    count:state,
});

export default connect(mapStateToProps)(Counter);