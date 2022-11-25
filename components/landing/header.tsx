import {
  LogoutOutlined,
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useWeb3React } from "@web3-react/core";
import { Drawer, Input, Layout } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { injected } from "../wallet/connector";

interface HeaderProps {}

interface terminalIndexProps {
  start: number;
  end: number;
  originalString: string | any;
  replaceBy: string;
}

const listMenu = ["Collections", "Create", "FAQ", "Connect Wallet"];
const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { Header } = Layout;
  const { active, account, activate, deactivate } = useWeb3React();
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const connect = async () => {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", "true");
    } catch (ex) {
      console.log(ex);
    }
  };

  const disconnect = async () => {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", "false");
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", "true");
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  const cutString = (infoCut: terminalIndexProps): string =>
    infoCut.originalString.slice(0, infoCut.start) +
    infoCut.replaceBy +
    infoCut.originalString.slice(-infoCut.end);

  return (
    <Header>
      <h3>
        We have new social media - join us on our new Discord and Twitter for
        the latest announcements
      </h3>
      <div className="header-wrap">
        <Link href="/">
          <a>Sparkminds</a>
        </Link>
        {windowWidth <= 768 && <MenuOutlined onClick={() => setOpen(!open)} />}
        <Input addonBefore={<SearchOutlined />} />
        <div className="menu-function">
          {listMenu.map((item, index) => {
            if (item === "Connect Wallet") {
              if (active) {
                return (
                  <div className="active-account" key={index}>
                    <UserOutlined
                      style={{
                        fontSize: "1.5rem",
                      }}
                    />
                    <p>
                      {cutString({
                        start: 6,
                        end: 6,
                        originalString: account,
                        replaceBy: "....",
                      })}
                    </p>
                    <LogoutOutlined onClick={disconnect} />
                  </div>
                );
              } else {
                return (
                  <span key={index} onClick={connect}>
                    Connect Wallet
                  </span>
                );
              }
            } else {
              return (
                <Link href={item === "Create" ? "/upload" : "#"} key={index}>
                  <a>{item}</a>
                </Link>
              );
            }
          })}
        </div>
      </div>

      {windowWidth <= 768 && (
        <Drawer
          placement="right"
          onClose={onClose}
          open={open}
          className="menu-mobile"
        >
          <h1>Sparkminds</h1>
          <Input addonBefore={<SearchOutlined />} />
          <div className="menu-function">
            {listMenu.map((item, index) => {
              if (item === "Connect Wallet") {
                if (active) {
                  return (
                    <div className="active-account" key={index}>
                      <p>
                        {cutString({
                          start: 6,
                          end: 6,
                          originalString: account,
                          replaceBy: "....",
                        })}
                      </p>
                      <LogoutOutlined onClick={disconnect} />
                    </div>
                  );
                } else {
                  return (
                    <span key={index} onClick={connect}>
                      Connect Wallet
                    </span>
                  );
                }
              } else {
                return (
                  <Link href={item === "Create" ? "/upload" : "#"} key={index}>
                    <a>{item}</a>
                  </Link>
                );
              }
            })}
          </div>
        </Drawer>
      )}
    </Header>
  );
};

export default Header;
