import Image from "next/image";
import * as React from "react";
import { EtherumIcon } from "../../icons";
import solana_icon from "../../public/images/solana.svg";
import eth_icon from "../../public/images/eth.svg";
import binance_icon from "../../public/images/binance.svg";
import fantom_icon from "../../public/images/fantom.svg";
import polygon_icon from "../../public/images/polygon.svg";
import stack_icon from "../../public/images/stack.svg";
import avax_icon from "../../public/images/avax.svg";
interface InfoNFTProps {}
const listNetwork = [
  {
    title: "Etherum",
    img: eth_icon,
  },
  {
    title: "Solana",
    img: solana_icon,
  },
  {
    title: "Binance",
    img: binance_icon,
  },
  {
    title: "Fantom",
    img: fantom_icon,
  },
  {
    title: "Stacks",
    img: stack_icon,
  },
  {
    title: "Etherum",
    img: eth_icon,
  },
  {
    title: "Polygon",
    img: polygon_icon,
  },
  {
    title: "Avalanche",
    img: avax_icon,
  },
];
const InfoNFT: React.FunctionComponent<InfoNFTProps> = (props) => {
  return (
    <div className="info-nft">
      <h1>{`What's LaunchMyNFT?`}</h1>
      <span>
        The first fully automated multi-chain NFT collection generator
      </span>
      <div className="info-nft__network">
        {listNetwork.map((item, index) => (
          <div className="info-nft__network__item" key={index}>
            <Image alt="" src={item.img} width={32} height={32} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoNFT;
