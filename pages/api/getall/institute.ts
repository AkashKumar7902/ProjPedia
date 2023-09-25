import {connect} from "@/libs/mongodb";
import University from "@/models/university";
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    error: any
}
  
connect()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {    
    try {
        const universities = await University.find({}, 'name');
        console.log(universities)
        return res.status(200).json(universities)
    } catch (error : any) {
        alert(error.message);
        return res.status(500).json({error: error.message})
    }
}
  