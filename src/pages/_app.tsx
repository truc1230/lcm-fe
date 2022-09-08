import type { AppProps } from "next/app";
import { useRef } from "react";
import "styles/index.scss";
import Head from "components/layout/Head";
import { Provider } from "react-redux";
import store, { persistor } from "redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <PersistGate loading={<div>loading</div>} persistor={persistor}>
                <Head />
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
};
export default MyApp;
