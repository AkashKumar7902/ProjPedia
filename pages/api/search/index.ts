import type { NextApiRequest, NextApiResponse } from 'next'
import { Project } from '@/models/project';

type ResponseData = {
  name: string,
  link: string,
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const {query} = req.query;
  const projects = await Project.find({name: {$regex: `.*${query}.*`, $options: 'i'}});
  res.status(200).json(projects);
}
