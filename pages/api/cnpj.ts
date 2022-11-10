import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  
}


export default function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
  const { cnpj } = req.query;

  fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      res.status(200).json(res);
    });
}