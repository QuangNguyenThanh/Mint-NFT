import {
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import Link from "next/link";
import React from "react";
interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const { Footer } = Layout;
  return (
    <Footer>
      <div className="footer">
        <div className="footer__left">
          <h2>Want to say hey?</h2>
          <span>Find us on the platforms below!</span>
          <div className="group-icon">
            <TwitterOutlined />
            <YoutubeOutlined />
            <LinkedinOutlined />
          </div>
        </div>
        <div className="footer__center">
          <div className="footer__center__collection">
            <h2>Collection</h2>
            <p>Explore</p>
            <p>Hot</p>
            <p>Lastest</p>
          </div>
          <div className="footer__center__support">
            <h2>Support</h2>
            <p>FAQ</p>
            <p>Discord</p>
          </div>
          <div className="footer__center__info">
            <h2>Info</h2>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
        <div className="footer__right">
          <Link href={"/"}>
            <a>Sparkminds</a>
          </Link>
          <span>© LaunchMyNFT 2022</span>
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
