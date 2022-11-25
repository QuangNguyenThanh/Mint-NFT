import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/landing/banner";
import Collection from "../components/landing/collection";
import InfoNFT from "../components/landing/info-nft";
import SliderBlog from "../components/landing/slider";
import Support from "../components/landing/support";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Collection />
      <InfoNFT />
      <Support />
      <SliderBlog />
    </>
  );
};

export default Home;
