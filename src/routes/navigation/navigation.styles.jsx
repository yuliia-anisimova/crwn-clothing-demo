import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavigationLinks = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavigationLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
`;
 
// .navigation {

//   &__logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

//   &__links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//   }

//   &__link {
//     padding: 10px 15px;
//     cursor: pointer;
//     text-transform: uppercase;
//   }
// }
