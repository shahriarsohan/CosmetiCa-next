import Head from "next/head";

import { connect } from "react-redux";

import NProgress from "nprogress";
import Router from "next/router";

import TawkTo from "../components/Tawk";

import "semantic-ui-css/semantic.min.css";

import { I18nProvider, LOCALS } from "../i18n/index";

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <I18nProvider locale={LOCALS.ENGLISH}>
        <Component {...pageProps} />
      </I18nProvider>
    </>
  );
}

export default connect(null)(MyApp);
