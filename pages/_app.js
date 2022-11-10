import { wrapper } from "../app/store";
import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
// export default wrapper.withRedux(MyApp);

/**
 * Update way
 */
import { FC } from "react";
import { Provider } from "react-redux";

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
