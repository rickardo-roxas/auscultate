// import Navbar from "./Header/Navbar";
// import Footer from "./Footer/Footer";

/**
 * Wrapper component that serves as a layout for the application.
 * @param {children} param0 - The children elements to be rendered inside the wrapper.
 * @returns {JSX.Element} - The wrapper component with a navbar, main content, and footer.
 */
function Wrapper({ children }) {
    return (
        <>
            {/* <Navbar /> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    );
}

export default Wrapper;
