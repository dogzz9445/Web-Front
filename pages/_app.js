import "../styles/globals.css";
import PropTypes from "prop-types";
import wrapper from "../store/configureStore";
import "antd/dist/antd.css"

function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
