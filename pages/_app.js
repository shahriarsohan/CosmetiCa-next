import Head from "next/head";

import TawkTo from "../components/Tawk";
import SideIcon from "../components/SideBarMEdia";
import "../components/Home/Home.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://s.pageclip.co/v1/pageclip.css"
          media="screen"
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
      {/* <SideIcon /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
