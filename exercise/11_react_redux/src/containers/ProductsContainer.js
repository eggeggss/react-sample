import { connect } from 'react-redux';
import { addToCart } from '../actions';
import ProductsList from '../components/ProductsList';

const mapStateToProp = state => ({
  products: state.products,

});

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id)),
});

export default connect(mapStateToProp, mapDispatchToProps)(ProductsList);
