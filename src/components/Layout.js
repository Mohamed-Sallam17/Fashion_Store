import { Outlet } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import MainFooter from "./MainFooter";

function Layout() {
  return (
    <>
        <HeaderNav/>
        <Outlet/>
        <MainFooter/>
    </>
  )
}

export default Layout;