import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import { createImage } from "../../utils/createImage";
type Data = {
  title?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    return res.status(500).json({ title: "error" });
  } else if (req.method === "POST") {
    createImage(req.body.listFile);
    return res.status(201).json({
      title: "Success",
    });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
