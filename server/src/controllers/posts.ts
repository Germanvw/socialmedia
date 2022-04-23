import { Request, Response } from 'express';
import {
  queryFetchPostsAll,
  queryFetchPostsByUser,
  queryFetchPostById,
} from '../db/querys/queryPost';

const con = require('../db/db');

export const fetchAllPosts = (req: Request, res: Response) => {
  try {
    con.query(queryFetchPostsAll, (_: any, results: any) => {
      return res
        .status(200)
        .json({ ok: true, posts: results.length > 0 ? results : [] });
    });
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};
export const fetchAllPostUser = (req: Request, res: Response) => {
  try {
    con.query(
      queryFetchPostsByUser,
      [req.params.id],
      (_: any, results: any) => {
        return res
          .status(200)
          .json({ ok: true, posts: results.length > 0 ? results : [] });
      }
    );
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};

export const fetchPostById = (req: Request, res: Response) => {
  try {
    con.query(queryFetchPostById, [req.params.id], (_: any, results: any) => {
      return res.status(200).json({ ok: true, post: results });
    });
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};
