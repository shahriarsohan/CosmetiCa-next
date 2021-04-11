import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id="G-RND73WY51N"`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RND73WY51N', {
                page_path: window.location.pathname,
              });
          `,
            }}
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
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
