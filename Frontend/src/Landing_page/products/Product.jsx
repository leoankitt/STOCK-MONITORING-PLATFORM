import React from "react";
import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Unviverse from "./Universe";

function Product() {
  return (
    <>
      <Hero />
      <Leftsection
        image="/images/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        Trydemo="Try demo →"
        Learnmore="Learn more →"
        google="/images/googlePlayBadge.svg"
        appstore="/images/appstoreBadge.svg"
      />
      <Rightsection
        image="/images/console.png"
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        Learnmore="Learn more →"
      />
      <Leftsection
        image="/images/coin.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        Trydemo="Coin →"
        Learnmore="Learn more →"
        google="/images/googlePlayBadge.svg"
        appstore="/images/appstoreBadge.svg"
      />
      <Rightsection
        image="/images/kiteconnect.png"
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Learnmore="Kite Connect → "
      />
      <Leftsection
        image="/images/varsity.png"
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        google="/images/googlePlayBadge.svg"
        appstore="/images/appstoreBadge.svg"
      />
      <Unviverse />
    </>
  );
}

export default Product;
