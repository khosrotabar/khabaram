import Head from "next/head";
import store from "../redux/store";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import Layout from "../components/layout/Layout";

import "../styles/globals.css";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("boxicons");
  }, []);

  if (Component.getLayout) {
    return (
      <>
        <Head>
          <title>khabaram site</title>
          <meta name="fontiran.com:license" content="P2BABS" />
        </Head>
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }

  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>khabaram site</title>
          <meta name="fontiran.com:license" content="P2BABS" />
        </Head>
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Layout>
    </Provider>
  );
}

export default MyApp;
