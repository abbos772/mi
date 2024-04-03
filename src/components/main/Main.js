import React from "react";
import "./Main.css";
import watch from "../../assets/images/2812fa98470fc74af39d0c420f50bf09.webp";
import redmi from "../../assets/images/eb1caad847c2d7ef32a81c937ae1f844.webp";
import mini from "../../assets/images/e02e51cd6efb5f2282e6921128b2618a.webp";
import hand from "../../assets/images/customer-service-svgrepo-com.svg";
function Main() {
  return (
    <div className="main">
      <img className="watch" src={watch} alt="" />
      <div className="continer">
        <div className="products">
          <div className="text">
            <h2>Feature Products</h2>
            <div className="aa">
              <a href="a">Stay on Trend</a>
              <a href="a">Latesty FlagShip</a>
              <a href="a">Enjoy the Outdoors</a>
              <a href="a">Gaming Essentials</a>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card_img">
                <img src={redmi} alt="" />
              </div>
              <div className="card_text">
                <h2>
                  Redmi note <b>13</b> Pro+ 5G
                </h2>
                <h4>Xiaomi Fan Festival Special Edation</h4>
                <p>Limited availability | Mystic Silver</p>
              </div>
            </div>
            <div className="card_m">
              <div className="mini_card">
                <img src={mini} alt="" />
                <h4>Redmi note 13 pro 5G</h4>
                <p>Super clear 108 mp camera</p>
              </div>
              <div className="mini_card">
                <img src={mini} alt="" />
                <h4>Redmi note 13 pro 5G</h4>
                <p>Super clear 108 mp camera</p>
              </div>
              <div className="mini_card">
                <img src={mini} alt="" />
                <h4>Redmi note 13 pro 5G</h4>
                <p>Super clear 108 mp camera</p>
              </div>
              <div className="mini_card">
                <img src={mini} alt="" />
                <h4>Redmi note 13 pro 5G</h4>
                <p>Super clear 108 mp camera</p>
              </div>
            </div>
          </div>
          <div className="supports">
            <h1>Xioami Support</h1>
            <div className="sup1">
              <div className="sup">
                <img src={hand} width={70} alt="" />
                <h3> customer Support</h3>
              </div>
              <div className="sup">
                <img src={hand} width={70} alt="" />
                <h3> Warranty</h3>
              </div>
              <div className="sup">
                <img src={hand} width={70} alt="" />
                <h3> User guides</h3>
              </div>
              <div className="sup">
                <img src={hand} width={70} alt="" />
                <h3>FAQ</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
