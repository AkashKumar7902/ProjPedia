import type { NextApiRequest, NextApiResponse } from 'next'
import { Project } from '../../../models/project';
import {connect } from '../../../libs/mongodb';

connect();
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch(e: any) {
    res.status(500).json({message: e.message});
  }
}