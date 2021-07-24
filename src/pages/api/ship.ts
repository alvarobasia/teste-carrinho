const time = async () => new Promise((resolve) => setTimeout(resolve, 1000));
import { NextApiRequest, NextApiResponse } from "next";
import under10 from "../../../abaixo-10-reais.json";

export default async function handlerShip(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await time();
  res.status(200).json(under10);
}
