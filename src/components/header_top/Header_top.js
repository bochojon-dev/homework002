import React from "react";
import "../header_top/Header_top.css";

function Header_top() {
  return (
    <div className="header">
      <div className="container">
        <div className="header_top">
          <div></div>
          <div>
            <pre>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%! <p>ShopNow</p>
            </pre>
          </div>
          <div className="lang">
            <select name="lang">
              <option value="English">English</option>
              <option value="Russia">Russia</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_top;
