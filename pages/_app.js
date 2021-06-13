import "../styles/globals.css";
import PropTypes from "prop-types";
import wrapper from "../store/configureStore";
import "antd/dist/antd.css"

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(MyApp);
