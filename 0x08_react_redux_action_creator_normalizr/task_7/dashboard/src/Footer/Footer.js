import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from './../App/AppContext';

function Footer() {
  return (
    <AppContext.Consumer>
      {value => {
        return (
          <div className="footer">
            <p>
              Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {value.user.isLoggedIn && <a href="#">Contact us</a>}
          </div>
        )
      }}
    </AppContext.Consumer>
  );
}

export default Footer;
