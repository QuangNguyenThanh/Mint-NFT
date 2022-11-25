import type { NextApiRequest, NextApiResponse } from 'next'
import { build } from '../../utils/generator';
import dirTree from "directory-tree";
type Data = {
  status?: string;
}

const treeBG = dirTree("./public/images/input_images/background");
const treeFace = dirTree("./public/images/input_images/face");
const treeLeftEye = dirTree("./public/images/input_images/left_eye");
const treeMouth = dirTree("./public/images/input_images/mouth");
const treeAccessory = dirTree("./public/images/input_images/accessory");
const treeRightEye = dirTree("./public/images/input_images/right_eye");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  var _thisIndex = 1;
  const _maxSupply = 10;
  while (_thisIndex <= _maxSupply) {
    try {
      await build(
        _thisIndex,
        () => {
          _thisIndex++;
        },
        treeBG,
        treeFace,
        treeLeftEye,
        treeMouth,
        treeAccessory,
        treeRightEye
      );
    } catch (e) {
      res.status(400).json({
        status: `Getting error when created NFT ${_thisIndex}`
      })
      _thisIndex = _maxSupply + 1;
    }
  }

  res.status(200).json({
    status: "Success"
  })
}
