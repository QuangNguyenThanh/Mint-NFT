import { FacebookOutlined, TwitterOutlined } from "@ant-design/icons";
import * as React from "react";

interface SupportProps {}

const Support: React.FunctionComponent<SupportProps> = (props) => {
  return (
    <div className="support">
      <h1>
        Looking for <br /> updates or support?
      </h1>
      <div className="support__icon">
        <TwitterOutlined />
        <FacebookOutlined />
      </div>
    </div>
  );
};

export default Support;
