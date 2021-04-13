import Head from "next/head";

import { connect } from "react-redux";

import NProgress from "nprogress";
import Router from "next/router";

import { Provider } from "react-redux";

import store from "../store/index";

import TawkTo from "../components/Tawk";
import "../components/Home/Home.css";

import "semantic-ui-css/semantic.min.css";

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>COSMETICA - Best hair solution for men in bangladesh</title>
          <meta
            name="description"
            content="COSMETICA is a one stop Hair solution center. we provide Hair replacement, Hair Fall control therapy, PRP for hair growth"
          ></meta>
          <meta
            name="google-site-verification"
            content="6ah7J7gNWwMYTCiIPzFeipEABaXCtTAA4trXVZ0dG38"
          />
          <meta name="robots" content="index , follow"></meta>
          <meta
            name="copyright"
            content="Cosmetica is registered trademark of Cosmetica LTD."
          ></meta>
          <meta
            name="keywords"
            content="Hair Replacement, wig, hair extension , prp , mesotherapy,hair fall problem,baldness , cosmetica , hair fall solution,hair growth tips"
          ></meta>
          <link
            rel="stylesheet"
            href="https://s.pageclip.co/v1/pageclip.css"
            media="screen"
          />
          <title>COSMETICA - Best hair solution for men in bangladesh</title>
          <meta
            name="description"
            content="COSMETICA is a one stop Hair solution center. we provide Hair replacement, Hair Fall control therapy, PRP for hair growth"
          ></meta>
          <meta name="robots" content="index , follow"></meta>
          <meta
            name="copyright"
            content="Cosmetica is registered trademark of Cosmetica LTD."
          ></meta>
          <meta
            name="keywords"
            content="Hair Replacement, wig, hair extension , prp , mesotherapy,hair fall problem,baldness , cosmetica , hair fall solution,hair growth tips"
          ></meta>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            rel="shortcut icon"
            href="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/cosmetica-assets/favicon.png"
          ></link>

          <link
            rel="shortcut icon"
            href="assets/images/favicon.png"
            type="image/png"
          />

          <link
            rel="stylesheet"
            href="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/assets/css/animate.css"
          />

          <link
            rel="stylesheet"
            href="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/assets/fonts/lineicons/fonts/LineIcons.css"
          />

          <link
            rel="stylesheet"
            href="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/assets/css/bootstrap.min.css"
          />

          <link
            rel="stylesheet"
            href="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/assets/css/default.css"
          />

          <link
            rel="stylesheet"
            href="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/assets/css/style.css"
          />

          <script src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/js/vendor/jquery-1.12.4.min.js"></script>
          <script src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/js/vendor/modernizr-3.7.1.min.js"></script>

          <script src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/js/popper.min.js"></script>
          <script src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/js/bootstrap.min.js"></script>

          <script src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/js/jquery.easing.min.js"></script>
          <script src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/js/scrolling-nav.js"></script>

          <script src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/wow.min.js"></script>
          <script src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/expand.js"></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
            crossorigin="anonymous"
          ></script>
          <script src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/hotjar.js"></script>
          <script
            src="https://s.pageclip.co/v1/pageclip.js"
            charset="utf-8"
          ></script>
        </Head>

        <TawkTo />

        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
