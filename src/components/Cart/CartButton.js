import classes from './CartButton.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { Cartactions } from '../../Store/CartSlice';

const CartButton = (props) => {
  const dispatch=useDispatch();
  return (
    <button className={classes.button} onClick={()=>dispatch(Cartactions.showCart())}  >
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
