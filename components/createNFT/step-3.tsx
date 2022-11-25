import { Button } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface StepThreeProps {}

const StepThree: React.FunctionComponent<StepThreeProps> = (props) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [allFile, setAllFile] = useState<any>({});
  const [imgUrl, setImgUrl] = useState<any[]>([]);
  const toBase64 = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute("directory", "");
      ref.current.setAttribute("webkitdirectory", "");
    }
  }, [ref]);
  const handleChange = (e: any) => {
    setAllFile(
      Object.fromEntries(
        Object.entries(e.target.files).filter(
          ([_, value]: any) => !value?.name.includes("json")
        )
      )
    );
  };
  const filesToBase64 = async (files: any[]) => {
    const values = await Promise.all(files?.map((x) => toBase64(x)));

    const _imgUrl = values.map((x, i) => ({
      base64: x,
      name: files[i]?.name,
    }));
    setImgUrl(_imgUrl);
  };

  useEffect(() => {
    if (allFile && Object.keys(allFile).length > 0) {
      filesToBase64(
        Object.keys(allFile)
          .sort()
          .map((x) => allFile[x])
      );
    }
  }, [allFile]);

  return (
    <div className="step-3">
      {imgUrl.length > 0 ? (
        <>
          <h3 className="title-preview">Preview</h3>
          <div className="group-btn">
            <Button>Back</Button>
            <Button>Continue</Button>
          </div>
          <div className="group-images">
            {imgUrl.map((item, index) => (
              <div className="card__images" key={index}>
                <Image src={item.base64} alt="" width={300} height={300} />
                <div className="card__images__info">
                  <span>{item.name.replace("-", " #").split(".png")[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h3>Drop your NFT assets below to launch!</h3>
          <div className="upload-folder">
            <label htmlFor="file">Upload your folder</label>
            <input
              type="file"
              ref={ref}
              id="file"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default StepThree;
