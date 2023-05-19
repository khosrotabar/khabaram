import { Fragment } from "react";

import Footer from "./Footer";
import Header from "./Header";
import HeaderResp from "./Header_Resp";
import FooterResp from "./Footer_Resp";
import FooterRespMobile from "./Footer_Resp_Mobile";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <HeaderResp />
      {props.children}
      <Footer />
      <FooterResp />
      <FooterRespMobile />
    </Fragment>
  );
}

export default Layout;
