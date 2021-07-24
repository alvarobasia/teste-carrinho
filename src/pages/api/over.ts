import type { NextApiRequest, NextApiResponse } from "next";
import over10 from "../../../acima-10-reais.json";

const time = async () => new Promise((resolve) => setTimeout(resolve, 1000));

export default async function handlerFree(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await time();
  res.status(200).json(over10);
}
