import type { NextApiRequest, NextApiResponse } from 'next'
const { Project } = require('../../../models/project');
const connectMongoDb = require('../../../libs/mongodb'); 

type ResponseData = {
  name: string,
  link: string,
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const {query} = req.query;
  await connectMongoDb();
  const projects = await Project.find({name: {$regex: `.*${query}.*`, $options: 'i'}});
  res.status(200).json(projects);
}
