import { useContext } from "react";
import "./navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";
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
      <header className="navigation">
        <div className="navigation__logo-container">
          <Link className="navigation__logo" to="/">
            <CrwnLogo className="navigation__logo" />
          </Link>
        </div>

        <nav className="navigation__links-container">
          <Link className="navigation__link" to="/shop">
            shop
          </Link>
          {currentUser ? (
            <span className="navigation__link" onClick={signOutUser}>
              sign out
            </span>
          ) : (
            <Link className="navigation__link" to="/auth">
              sign in
            </Link>
          )}
          <CartIcon />
        </nav>
        {isCartOpen && <CartDropdown />}
      </header>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
