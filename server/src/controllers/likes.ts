import { Response } from 'express';
import {
  queryGetUserLikeByPost,
  queryLikePost,
  queryDislikePost,
  queryGetLikesByPost,
} from '../db/querys/queryLike.ts';

const con = require('../db/db');

export const handleLike = (req: any, res: Response) => {
  const { user } = req;
  const { id } = req.params;
  const { post_author } = req.body;
  try {
    con.query(
      queryGetUserLikeByPost,
      [user.id, id],
      (_: any, results: any[]) => {
        // If results > 0, user has already liked post, so we need to dislike it
        if (results.length > 0) {
          con.query(
            queryDislikePost,
            [user.id, id],
            (_: any, { affectedRows }: any) => {
              // Success Dislike
              if (affectedRows > 0)
                return res.status(200).json({
                  message: 'Post disliked',
                  ok: true,
                });

              return res
                .status(400)
                .json({ ok: false, msg: 'Error on request' });
            }
          );
        } else {
          con.query(
            queryLikePost,
            [user.id, id, post_author],
            (_: any, { affectedRows }: any) => {
              if (affectedRows > 0) {
                // Success like
                if (affectedRows > 0)
                  return res.status(200).json({
                    message: 'Post liked',
                    ok: true,
                  });
                return res
                  .status(400)
                  .json({ ok: false, msg: 'Error on request' });
              }
            }
          );
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};

export const getLikeStatus = (req: any, res: Response) => {
  const { user } = req;
  const { id } = req.params;
  try {
    con.query(
      queryGetUserLikeByPost,
      [user.id, id],
      (_: any, results: any[]) => {
        if (results.length > 0) {
          return res.status(200).json({
            liked: true,
          });
        }
        return res.status(200).json({
          liked: false,
        });
      }
    );
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};

export const getTotalLikesPost = (req: any, res: Response) => {
  con.query(queryGetLikesByPost, [req.params.id], (_: any, results: any[]) => {
    try {
      if (results.length > 0)
        return res.status(200).json({
          likes: results.length,
        });

      return res.status(200).json({
        likes: 0,
      });
    } catch (err) {
      return res.status(500).json({ ok: false, msg: 'Error on request' });
    }
  });
};
