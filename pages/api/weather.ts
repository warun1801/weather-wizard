// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    console.log("Gello");
    const {city} = req.body;
    console.log("Lawda " + city);
    const url = `http://api.weatherapi.com/v1/current.json?key=49b5b2919ea744d5b0895520221705&q=${city}&aqi=no`;
    try{
        const response = fetch(url);
        res.status(200).json(response);
    } catch(error: any){
        res.status(500).json({error: error.message});
    }
}
