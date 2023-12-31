import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector(selectCartCount);

  const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen));
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
