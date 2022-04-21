import { Request, Response } from 'express';
import {
  queryFetchUserAllWithoutPassword,
  queryFetchUserSingle,
} from './querys';

const con = require('../db/db');

export const fetchUserAll = (_: Request, res: Response) => {
  try {
    con.query(queryFetchUserAllWithoutPassword, (err: any, results: any) => {
      if (results) {
        return res.status(200).json({ ok: true, users: results });
      } else {
        return res.status(400).json({ ok: false, msg: 'No users found.', err });
      }
    });
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};

export const fetchUserSingle = (req: Request, res: Response) => {
  try {
    con.query(
      queryFetchUserSingle,
      [req.params.id],
      (err: any, results: any) => {
        if (results) {
          return res.status(400).json({ ok: true, user: results });
        } else {
          return res
            .status(200)
            .json({ ok: false, msg: 'User not found.', err });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};
