import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../config/db';

export default async (req, res) => {
    try {
      const user = await db.one('SELECT * FROM USER WHERE id=$1', '_veronica')
      res.status(200).json(user)
    } catch (e) {
      res.status(500).end()
    }
  }