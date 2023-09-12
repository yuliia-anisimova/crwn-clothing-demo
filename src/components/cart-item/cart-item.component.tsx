import { FC } from "react";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";
import { CartItem as CartItemType } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price * quantity}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
