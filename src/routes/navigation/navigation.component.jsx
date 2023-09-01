import { useContext } from "react";
import "./navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  // const signOutHandler = async () => {
  //   const response = await signOutUser();
  //   console.log(response);
  //   setCurrentUser(null);
  // }
  const signOutHandler = async () => {
    try {
      await signOutUser(); // Assuming signOutUser() is your sign-out function.
      console.log("User signed out successfully");
      setCurrentUser(null);
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };


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
            <span className="navigation__link" onClick={signOutHandler}>
              sign out
            </span>
          ) : (
            <Link className="navigation__link" to="/auth">
              sign in
            </Link>
          )}
        </nav>
      </header>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
