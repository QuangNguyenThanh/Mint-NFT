import { Button } from "antd";
import Image from "next/image";
import * as React from "react";
import banner_img from "../../public/images/banner.png";
import banner_2_img from "../../public/images/banner_2.png";
import banner_3_img from "../../public/images/banner_3.png";

interface BannerProps {}
const Banner: React.FunctionComponent<BannerProps> = (props) => {
  return (
    <div className="banner">
      <div className="banner__title">
        <h1>The home of NFT creation</h1>
        <Button>Explore</Button>
      </div>
      <div className="banner__collection">
        <div className="row-1">
          <div className="test">
            <Image alt="" src={banner_img} />
            <div className="title">
              <span>Sparkminds Join Stock</span>
            </div>
          </div>

          <div className="test">
            <Image alt="" src={banner_2_img} />
            <div className="title">
              <span>Sparkminds Join Stock</span>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="test test__img">
            <Image alt="" src={banner_3_img} />
            <div className="title">
              <span>Sparkminds Join Stock</span>
            </div>
          </div>
          <div className="group-test">
            <div className="test">
              <Image alt="" src={banner_2_img} />
              <div className="title">
                <span>Sparkminds Join Stock</span>
              </div>
            </div>
            <div className="test">
              <Image alt="" src={banner_img} />
              <div className="title">
                <span>Sparkminds Join Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
