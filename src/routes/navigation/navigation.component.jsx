import { useContext } from "react";
import {
  NavigationContainer,
  LogoContainer,
  NavigationLinks,
  NavigationLink,
} from "./navigation.styles.jsx";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <div className="navigation__logo-container">
          <LogoContainer to="/">
            <CrwnLogo className="navigation__logo" />
          </LogoContainer>
        </div>

        <NavigationLinks>
          <NavigationLink to="/shop">shop</NavigationLink>
          {currentUser ? (
            <NavigationLink as="span" onClick={signOutUser}>
              sign out
            </NavigationLink>
          ) : (
            <NavigationLink to="/auth">sign in</NavigationLink>
          )}
          <CartIcon />
        </NavigationLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
