import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main id="site-body">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
