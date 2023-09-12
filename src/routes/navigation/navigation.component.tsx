import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NavigationContainer,
  LogoContainer,
  NavigationLinks,
  NavigationLink,
  SignOutLink,
} from "./navigation.styles";
import { Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutStart } from "../../store/user/user.action"; 
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

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
            <SignOutLink onClick={signOutUser}>
              sign out
            </SignOutLink>
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
