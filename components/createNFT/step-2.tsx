import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setResult } from "../../redux/slice/createNFTSlice";

interface StepTwoProps {}

const StepTwo: React.FunctionComponent<StepTwoProps> = (props) => {
  const dispatch = useDispatch();
  const ref = React.useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string>();
  const [allFile, setAllFile] = useState<any>({});

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
    const isValid =
      Object.values(e.target.files).filter((x: any) => x.name === ".DS_Store")
        ?.length > 0;
    if (
      e.target.files[0]?.webkitRelativePath.split("/")[0] !== "input_images"
    ) {
      setError("Please follow our example input folder");
    } else {
      if (
        !isValid &&
        e.target.files[0]?.webkitRelativePath.split("/").length !== 4
      ) {
        setError("Please follow out example input. Not allow nested folder");
      } else {
        setAllFile(
          Object.fromEntries(
            Object.entries(e.target.files).filter(
              ([_, value]: any) => value.name !== ".DS_Store"
            )
          )
        );
      }
    }
  };

  const filesToBase64 = async (files: any[]) => {
    const values = await Promise.all(files?.map((x) => toBase64(x)));

    const _imgUrl = values.map((x, i) => ({
      source: files[i]?.webkitRelativePath,
      base64: x,
    }));

    if (_imgUrl && Object.keys(_imgUrl).length > 0) {
      fetch("/api/upload", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          listFile: _imgUrl,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch(setResult(data));
          fetch("api/generate");
        });
    }
  };

  useEffect(() => {
    if (allFile && Object.keys(allFile).length > 0) {
      filesToBase64(Object.keys(allFile).map((x) => allFile[x]));
    }
  }, [allFile]);

  return (
    <div className="step-2">
      <h1>Drop your input folder below to start the NFT generator</h1>
      <Link href="https://firebasestorage.googleapis.com/v0/b/launch-my-nft.appspot.com/o/example_input_images.zip?alt=media&token=4a187a30-450d-4d9e-9145-b5568d9f52df">
        <a
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: "5px",
          }}
        >
          Download example input folder
        </a>
      </Link>
      <div className="upload-folder">
        <label htmlFor="file">Upload your folder</label>
        <input
          type="file"
          ref={ref}
          onChange={(e) => handleChange(e)}
          id="file"
        />
        {error && (
          <p style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default StepTwo;
