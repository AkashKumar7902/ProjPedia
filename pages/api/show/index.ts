import type { NextApiRequest, NextApiResponse } from 'next'
const { Project } = require('../../../models/project');
const connectMongoDb = require('../../../libs/mongodb'); 
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // parse json data in req body
  const {data} = req.body;
  await connectMongoDb();
  const projects = await Project.find();
  res.status(200).json(projects);
}
