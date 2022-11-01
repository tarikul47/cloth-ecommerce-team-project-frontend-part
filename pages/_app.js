import { wrapper } from "../app/store";
import { Provider } from "react-redux";
import "../styles/globals.css";

function MyApp({ Component, ...rest }) {
  const {
    store,
    props: { pageProps },
  } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
