import React from "react";
import Hilton from "../Hilton/Hilton";
import Offers from "../Offers/Offers";
import FooterPart1 from "../../assets/FooterPart1.jsx";
import Carousel from "../../assets/Carousel/Carousel.jsx";
import CinnamonPart from "../Cinnoman/CinnamonPart.jsx";

export default function Home() {
  return (
    <>
      <Carousel />
      <CinnamonPart />
      <Hilton />
      <Offers />
      <FooterPart1 />
    </>
  );
}
