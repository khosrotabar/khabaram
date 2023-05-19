import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          {/* <div className="loading-container" id="loading">
            <div className="loading-for-scale">
              <div className="loading-sub-container">
                <div className="row">
                  <div className="purple-box"></div>
                  <div className="white-box"></div>
                </div>
                <div className="row">
                  <div className="white-box"></div>
                  <div className="purple-box"></div>
                </div>
              </div>
            </div>
          </div> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
