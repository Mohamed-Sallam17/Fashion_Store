<<<<<<< HEAD
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

function Layout(){
    return (
        <div>
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    )
}
export default Layout
=======
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
>>>>>>> e376db41108b93d16d23a7f08a46a303f0dac523
