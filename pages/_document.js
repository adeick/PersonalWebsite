import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#FFFFFF" name="theme-color" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
            rel="stylesheet"
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" 
            rel="stylesheet"
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" 
            rel="stylesheet"
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Newsreader&display=swap" 
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
