import { Layout } from "antd";
import * as React from "react";
import Header from "../components/landing/header";
import Footer from "./landing/footer";
interface LayoutLandingProps {
  children: React.ReactNode;
}

const LayoutLanding: React.FunctionComponent<LayoutLandingProps> = (props) => {
  const { Content } = Layout;
  return (
    <Layout>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </Layout>
  );
};

export default LayoutLanding;
