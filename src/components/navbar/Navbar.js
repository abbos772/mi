import React from "react";
import "./Navbar.css";
import mi from "../../assets/images/xiaomi-svgrepo-com.svg";
import search from "../../assets/images/search-svgrepo-com (1).svg";
import user from "../../assets/images/user-svgrepo-com.svg";
function Navbar() {
  return (
    <div className="continer">
      <div className="navbar">
        <div className="nav">
          <img src={mi} alt="" width={42} height={42} />
          <h4>Phone</h4>
          <h4>SmartHome</h4>
          <h4>Life Style</h4>
        </div>
        <div className="nav">
          <h4>Discover</h4>
          <h4>Support</h4>
          <img src={search} alt="" width={32} />
          <img src={user} alt="" width={32} />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
