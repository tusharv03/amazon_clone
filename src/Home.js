import React from "react";
import "./Home.css";
import "./Product";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61VtzOGQCaL._SX3000_.jpg"
          alt=""
        />
      </div>
      <div className="home_row">
        <Product
          id="12345678"
          title="The lean startup"
          price={29.99}
          image="https://m.media-amazon.com/images/I/81kSbfq3O+L._AC_UF1000,1000_QL80_.jpg"
          rating={5}
        />
        <Product
          id="12348484"
          title="kitchenaid png 10 free Cliparts | Download images on Clipground 2022"
          price={229.99}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fkitchenaid-png-1.png&f=1&nofb=1&ipt=6dce076fc3a8829a6d1e52319b58cc75a09a52204b553872378f04efd2ece007&ipo=images"
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          id="12345555"
          title="Smart Watch with Multi-Function"
          price={129.99}
          image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fd2b8wt72ktn9a2.cloudfront.net%2Fmediocre%2Fimage%2Fupload%2Fc_pad%2Cf_auto%2Ch_600%2Cq_auto%2Cw_600%2Feawyvaq46smgsrsnzvad.png&f=1&nofb=1&ipt=f2011849140f4430c1dc8bcf5e0c0ad58a8d20d3a50b10d2f803763dac52a1ca&ipo=images"
          rating={5}
        />
        <Product
          id="12345670"
          title="BRAVIA smart TV "
          price={29.99}
          image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fled-tv-png--1200.png&f=1&nofb=1&ipt=5554219781ac6cdf2167f26bffdefd7b044fc44324bb7116f5dbc044f59f800c&ipo=images"
          rating={5}
        />
        <Product
          id="12340000"
          title="Puma Unisex-Adult Infusion One8 Training Shoe "
          price={29.99}
          image="https://m.media-amazon.com/images/I/61j5yiCjjDL._UY695_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
