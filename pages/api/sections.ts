import { NextApiRequest, NextApiResponse } from 'next'
import sections from "../../data/sections.json"

export default function handler(_: NextApiRequest, res: NextApiResponse) {
    res.statusCode = 200;
    res.json(sections['sections']);
};