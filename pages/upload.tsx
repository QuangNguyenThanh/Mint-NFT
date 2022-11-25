import { Button, Steps } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PreviewNFT from "../components/createNFT/preview";
import StepOne from "../components/createNFT/step-1";
import StepTwo from "../components/createNFT/step-2";
import StepThree from "../components/createNFT/step-3";
import collection_icon from "../public/images/collection.png";
import generate_icon from "../public/images/generate_collection.png";
import { setStep } from "../redux/slice/createNFTSlice";
const optionsGenerate = [
  {
    title: "New Collection",
    img: collection_icon,
    desc: "Already have your NFT assets? Upload and launch your NFT collection.",
    btnText: "New Collection",
  },
  {
    title: "Generate Collection",
    img: generate_icon,
    desc: "Create and launch your randomly generated NFT collection.",
    btnText: "Generate Collection",
  },
];
interface IUploadImageProps {}
const UploadImage: React.FunctionComponent<IUploadImageProps> = (props) => {
  const { Step } = Steps;
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const stepNFT = useSelector((state: any) => state.nft.step);
  const result = useSelector((state: any) => state.nft.result);
  const handleChooseOption = (index: number) => {
    if (index === 0) {
      dispatch(setStep(1));
    }
    if (index === 1) {
      dispatch(setStep(2.1));
    }
  };

  useEffect(() => {
    switch (stepNFT) {
      case 2.2:
        setCurrentStep(1);
        break;
      case 2.3:
        setCurrentStep(2);
        break;
      default:
        setCurrentStep(0);
    }
  }, [stepNFT]);

  return (
    <>
      <div className="create">
        {!stepNFT && (
          <>
            <h1 className="create__title">Create Collection</h1>
            <span className="create__sub-title">
              Select New or Generate collection to launch your NFTs in 3 easy
              steps.
            </span>
            <div className="create__options">
              {optionsGenerate.map((item, index) => (
                <div className="create__options__item" key={index}>
                  <h2>{item.title}</h2>
                  <Image alt="" src={item.img} width={75} height={75} />
                  <span className="create__options__item__desc">
                    {item.desc}
                  </span>
                  <Button onClick={() => handleChooseOption(index)}>
                    {item.btnText}
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}
        {stepNFT > 0 && (
          <div className="step-nft">
            <h1>Collection generator</h1>
            <Steps size="small" current={currentStep} labelPlacement="vertical">
              <Step title="Collection Details" />
              <Step title="Generate Collection" />
              <Step title="Upload Collection" />
              <Step title="Deploy to chain" />
              <Step title="Success!" />
            </Steps>
          </div>
        )}
        {stepNFT === 2.1 && <StepOne />}
        {stepNFT === 2.2 && result.title !== "Success" && <StepTwo />}
        {result.title === "Success" && stepNFT === 2.2 && <PreviewNFT />}
        {stepNFT === 2.3 && <StepThree />}
      </div>
    </>
  );
};

export default UploadImage;
