import { DirectoryTree } from "directory-tree";
import { read } from "jimp";
import {
  getAccessory,
  getBackground,
  getFace,
  getLeftEye,
  getMouth,
  getRightEye,
} from "./traits";
import fs from "fs";
const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const build = async (
  index: number,
  onComplete: any,
  treeBG: DirectoryTree,
  treeFace: DirectoryTree,
  treeLeftEye: DirectoryTree,
  treeMouth: DirectoryTree,
  treeAccessory: DirectoryTree,
  treeRightEye: DirectoryTree
) => {
  const path = "./public/images/input_images";
  var _traits = [];
  // background

  const background = getBackground(treeBG);
  const backgroundJimp = await read(
    `${path}/background/${background.path.split("\\")[4]}/${background.name}`
  );
  _traits.push({
    trait_type: "Background",
    value: background.name,
  });

  var _composedImage = backgroundJimp;

  //face
  if (treeFace) {
    const face = getFace(treeFace);
    const faceJimp = await read(
      `${path}/face/${face.path.split("\\")[4]}/${face.name}`
    );
    _traits.push({
      trait_type: "Face",
      value: face.name,
    });

    _composedImage.blit(faceJimp, 0, 0);
  }

  // left eye
  if (treeLeftEye) {
    const eyeLeft = getLeftEye(treeLeftEye);
    const eyeLeftJimp = await read(
      `${path}/left_eye/${eyeLeft.path.split("\\")[4]}/${eyeLeft.name}`
    );
    _traits.push({
      trait_type: "Left Eye",
      value: eyeLeft.name,
    });

    _composedImage.blit(eyeLeftJimp, 0, 0);
  }

  // right eye
  if (treeRightEye) {
    const eyeRight = getRightEye(treeRightEye);
    const eyeRightJimp = await read(
      `${path}/right_eye/${eyeRight.path.split("\\")[4]}/${eyeRight.name}`
    );
    _traits.push({
      trait_type: "Right Eye",
      value: eyeRight.name,
    });

    _composedImage.blit(eyeRightJimp, 0, 0);
  }

  // accessory
  if (treeAccessory) {
    const accessory = getAccessory(treeAccessory);
    const accessoryJimp = await read(
      `${path}/accessory/${accessory.path.split("\\")[4]}/${accessory.name}`
    );
    _traits.push({
      trait_type: "Accessory",
      value: accessory.name,
    });

    _composedImage.blit(accessoryJimp, 0, 0);
  }
  // mounth
  if (treeMouth) {
    const mouth = getMouth(treeMouth);
    const mounthJimp = await read(
      `${path}/mouth/${mouth.path.split("\\")[4]}/${mouth.name}`
    );
    _traits.push({
      trait_type: "Mouth",
      value: mouth.name,
    });

    _composedImage.blit(mounthJimp, 0, 0);
  }

  ////////////////////////////
  await _composedImage.write(
    `public/images/output_random_nft/images/NFT-${index}.png`
  );
  await fs.mkdirSync(`public/images/output_random_nft/metadata`, {
    recursive: true,
  });
  await fs.writeFileSync(
    "public/images/output_random_nft/metadata/NFT-" + index + ".json",
    JSON.stringify({
      name: "My NFT #" + index,
      traits: _traits,
      image: index + ".png",
    })
  );
  onComplete();
};

export { build };
