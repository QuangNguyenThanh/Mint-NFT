import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/slice/createNFTSlice";
interface StepOneProps {
  tree?: any;
}

const StepOne: React.FunctionComponent<StepOneProps> = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [error, setError] = useState<boolean>(false);

  const onFinish = (values: any) => {
    if (Object.keys(values).length === 3) {
      dispatch(setStep(2.2));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    setError(errorInfo);
  };

  return (
    <div className="step-1">
      <h1>Collection Details</h1>
      <div className="step-1__form">
        <Form
          name="nft-form"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Contract Name"
            name="contract"
            rules={[
              { required: true, message: "Please input your contract name!" },
            ]}
          >
            <Input placeholder="MyNFTs" />
          </Form.Item>
          <Form.Item
            label="Collection Name"
            name="collection"
            rules={[
              { required: true, message: "Please input your collection name!" },
            ]}
          >
            <Input placeholder="MyNFTs" />
          </Form.Item>
          <Form.Item
            label="Symbol"
            name="symbol"
            rules={[{ required: true, message: "Please input your symbol!" }]}
          >
            <Input placeholder="MyNFTs" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default StepOne;
