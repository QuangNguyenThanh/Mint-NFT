import { Button, Popover } from "antd";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import banner_img from "../../public/images/banner.png";
interface SliderProps {}
const SliderBlog: React.FunctionComponent<SliderProps> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const content = (
    <div className="tooltip-content">
      <div className="tooltip-content__header">
        <Image
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/launch-my-nft.appspot.com/o/Users%2FEZNvQ7aLyWXCiyHkLb33zcQvA6aefCFqaRzS4W8Ksk7o%2FCollections%2F0ff2ru6oDKayfazEIZOS%2Fcover?alt=media&token=e1e1f910-434f-4313-92fa-8d09a599a9cf"
          width={70}
          height={70}
        />
        <span>7.50% sold (375/50000)</span>
      </div>
      <div className="tooltip-content__content">
        <span>
          Helium Cats are floating away on Solana. No roadmap, only floating
          upwards. A collection of 5,000 Helium Pets floating on Solana. Mint
          today!
        </span>
      </div>
    </div>
  );
  return (
    <div className="slider">
      <h1>Explore Collections</h1>
      <Button>View Collections</Button>
      <Slider {...settings}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Popover content={content} key={index} placement="bottom">
            <div>
              <Image alt="" src={banner_img} />
            </div>
          </Popover>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBlog;
