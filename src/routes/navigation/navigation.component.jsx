import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NavigationContainer,
  LogoContainer,
  NavigationLinks,
  NavigationLink,
} from "./navigation.styles.jsx";
import { Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutStart } from "../../store/user/user.action.js"; 
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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
