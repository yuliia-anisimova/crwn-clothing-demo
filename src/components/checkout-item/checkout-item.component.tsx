import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  clearCartItems,
} from "../../store/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { id, imageUrl, name, quantity, price } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleRemovingItem = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const handleAddingItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const handleClearingItems = () => dispatch(clearCartItems(cartItems, id));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan className="name"> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={handleRemovingItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddingItem}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price * quantity}</BaseSpan>
      <RemoveButton onClick={handleClearingItems}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
