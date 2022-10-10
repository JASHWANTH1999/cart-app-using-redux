import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { hideActions } from '../../redux/hidecart';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const quantity=useSelector((state)=>state.products.totalquantity)
  const hideCartHandler=()=>
  {
    dispatch(hideActions.hidecartstate());
  }
  return (
    <button className={classes.button} onClick={hideCartHandler}>
      <span >My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
