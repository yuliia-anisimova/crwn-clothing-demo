import "./navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

const Navigation = () => {
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
          <Link className="navigation__link" to="/auth">
            sign in
          </Link>
        </nav>
      </header>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
