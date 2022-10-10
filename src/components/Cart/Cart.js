import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {
 const cartitems= useSelector((state)=>state.products.items)
  
  return (
    <div>
   
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartitems.map((items)=>(
          <CartItem
          key={items.id}
          item={{ id:items.id,title: items.title, quantity: items.quantity, total: items.totalprice, price: items.price }}
        />
        ))}
       
        </ul>
        </Card>
        
        </div>
  );
};

export default Cart;
