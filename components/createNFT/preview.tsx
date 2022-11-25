import { HolderOutlined } from "@ant-design/icons";
import { Button, Input, InputNumber, Modal, Spin } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setResult, setStep } from "../../redux/slice/createNFTSlice";
import ReactLoading from "react-loading";

interface PreviewNFTProps {
  tree?: any;
}

const PreviewNFT: React.FunctionComponent<PreviewNFTProps> = ({ tree }) => {
  const router = useRouter();
  const disptach = useDispatch();
  const [indexImage, setIndexImage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [disabled, setDisabled] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const handlePreview = () => {
    if (indexImage < 10) {
      setIndexImage(indexImage + 1);
    } else {
      setIndexImage(1);
    }
  };

  const handleClear = () => {
    disptach(setStep(2.1));
    disptach(setResult({}));
    fetch("/api/remove-folder");
  };
  const handleGenerate = () => {
    setIsShow(true);
    router.push(`/api/images?size=${size}`);
    setTimeout(() => {
      setIsShow(false);
      disptach(setStep(2.3));
      fetch("/api/remove-folder");
    }, 5000);
  };
  const handleChangeInput = (e: any, value: string) => {
    if (value === "Number to generate") {
      setSize(parseInt(e.target.value) as number);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setDisabled(false);
    }, 8000);
  }, []);
  return (
    <>
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={isShow}
        onOk={() => setIsShow(false)}
        onCancel={() => setIsShow(false)}
      >
        <div className="spinner">
          <p>Generating NFTs</p>
          <ReactLoading
            type={"spin"}
            color={"#1978f3"}
            height={120}
            width={80}
          />
        </div>
      </Modal>
      <div className="preview-nft">
        <div className="preview-nft__row-1">
          {[
            { label: "Number to generate", value: "10" },
            { label: "Base art name", value: "NFT #" },
            { label: "Mint Cost", value: "0.005" },
            { label: "Royalties", value: "2.5" },
          ].map((item, index) => (
            <div className="form-input" key={index}>
              <span>{item.label}</span>
              <Input
                defaultValue={item.value}
                onChange={(e) => handleChangeInput(e, item.label)}
              />
            </div>
          ))}
        </div>
        <div className="preview-nft__row-2">
          <div className="layer-order">
            <h2>Layer order</h2>
            <div className="wrap">
              {[
                "Background",
                "Face",
                "Left Eye",
                "Right Eye",
                "Mouth",
                "Accessory",
              ].map((item, index) => (
                <div className="wrap__items" key={index}>
                  <span>{index + 1}</span>
                  <div className="layer">
                    <span>{item}</span>
                    <div className="percent">
                      <span>100</span>
                      <span>%</span>
                    </div>
                  </div>
                  <HolderOutlined />
                </div>
              ))}
            </div>
          </div>
          <div className="rarity-percentage">
            <h2>Rarity percentage</h2>
            <div className="wrap">
              {[
                {
                  label: "Common",
                  value: 50,
                },
                {
                  label: "Lengendary",
                  value: 5,
                },
                {
                  label: "Rare",
                  value: 20,
                },
                {
                  label: "Super Rare",
                  value: 25,
                },
              ].map((item, index) => (
                <div className="items" key={index}>
                  <span>{item.label}</span>
                  <div className="percent">
                    <InputNumber
                      addonAfter="%"
                      disabled
                      defaultValue={item.value}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="preview-image">
            <Image
              alt=""
              src={`/images/output_random_nft/NFT-${indexImage}.png`}
              width={350}
              height={350}
            />
            <Button onClick={() => handlePreview()}>Preview</Button>
          </div>
        </div>
        <div className="preview-nft__row-3">
          <Button
            onClick={() => handleGenerate()}
            disabled={disabled}
            loading={disabled}
          >
            Generate
          </Button>
          <Button onClick={() => handleClear()}>Clear</Button>
        </div>
      </div>
    </>
  );
};

export default PreviewNFT;
