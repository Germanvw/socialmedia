import { Request, Response } from 'express';
import {
  queryFetchPostsAll,
  queryFetchPostsByUser,
  queryFetchPostById,
  queryCreatePost,
  queryDeletePost,
  queryLastInsertId,
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

export const createPost = (req: any, res: Response) => {
  const { id } = req.user;
  const { text, image } = req.body;
  try {
    con.query(
      queryCreatePost,
      [text, image, id],
      (_: any, { affectedRows }: any) => {
        if (affectedRows > 0) {
          // Post created successfully
          con.query(queryLastInsertId, (_: any, results: any) => {
            // GETS ID OF THE POST INSERTED
            con.query(
              queryFetchPostById,
              [results[0].id],
              (_: any, results: any) => {
                //returns the post created
                return res.status(200).json({
                  ok: true,
                  post: results[0],
                });
              }
            );
          });
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};

export const deletePost = (req: any, res: Response) => {
  const { id } = req.params;
  const { user } = req;
  try {
    con.query(
      queryDeletePost,
      [id, user.id],
      (_: any, { affectedRows }: any) => {
        if (affectedRows > 0) {
          return res.status(200).json({ ok: true, msg: 'Post deleted', id });
        } else {
          return res.status(400).json({ ok: false, msg: 'Error on request' });
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};
