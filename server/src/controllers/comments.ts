import { Response } from 'express';
import { queryInsertComment, queryFetchCommentsByPost } from './querys';

const con = require('../db/db');

export const createComment = (req: any, res: Response) => {
  const { user } = req;
  const { id } = req.params;
  const { comment } = req.body;
  try {
    con.query(
      queryInsertComment,
      [id, user, comment],
      (_: any, results: any) => {
        if (results) {
          return res.status(201).json({ ok: true, msg: 'Comment posted' });
        } else {
          return res
            .status(401)
            .json({ ok: true, comment: results, msg: "Couldn't post comment" });
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};

export const fetchCommentsByPost = (req: any, res: Response) => {
  const { id } = req.params;
  try {
    con.query(queryFetchCommentsByPost, [id], (_: any, results: any) => {
      console.log(results);
      return res
        .status(200)
        .json({ ok: true, comments: results.length > 0 ? results : [] });
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};
