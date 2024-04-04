import React from "react";

import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="headone"> </div>
      <div className="headtwo">
        <div className="one">
          {" "}
          <h1>Our Leaders</h1>
        </div>
        <div className="two">
          {" "}
          <p>
            A team of cool-headed professionals and warm-hearted <br />
            innovators changing the world with innovative products <br /> and
            outstanding services that people simply love to use.
          </p>
        </div>
      </div>

      <div className="headthree">
        <div className="bone">
          <div className="bbone"><h4>HEAD OF CREATIVE</h4><br />
          <p>Donec et odio pellentesque diam volutpat commodo sed egestas. Nisl condimentum id venenatis a. Proin nibh nisl condimentum id. Dictumst vestibulum rhoncus est pellentesque elit.</p></div>
          <div className="AdamSmith">
          <div className="AdamSmithphoto"></div>
          <div className="aboutAdamSmith"><h3>Adam Smith</h3></div>
          </div>
        </div>
        <div className="btwo">
          <div className="MaryBrown"><div className="MaryBrownphoto"><div className="MaryBrownabout"><h3>Mary Brown </h3> </div></div></div>
        </div>
        <div className="bthree"><div className="AnnRichmond"><div className="AnnRichmondphoto"></div></div></div>
      </div>
    </div>
  );
}
