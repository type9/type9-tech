import { NextApiRequest, NextApiResponse } from 'next'
import projects_data from "../../data/projects.json"

export default function handler(_: NextApiRequest, res: NextApiResponse) {
    res.status(200);
    res.json(projects_data['projects']);
};