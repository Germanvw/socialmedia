import { Response } from 'express';
import {
  queryAddFriend,
  queryFetchFriendRequestAlreadyExistPending,
  queryFetchFriendRequestReceived,
  queryFetchFriendRequestSingle,
  queryGetFriendList,
  queryRemoveFriend,
  queryResponseFriendRequest,
  querySendFriendRequest,
} from './querys';

const con = require('../db/db');

export const createFriendRequest = (req: any, res: Response) => {
  const { receiverID } = req.body;
  const { user } = req;
  try {
    if (parseInt(user.id) === parseInt(receiverID)) {
      return res.status(400).json({
        ok: false,
        msg: 'You cannot send friend request to yourself.',
      });
    }
    // Validate that the user is not already a friend

    // Validate that the user does not already have a pending friend request from this user.
    con.query(
      queryFetchFriendRequestAlreadyExistPending,
      [receiverID, user.id],
      (_: any, results: any) => {
        if (results.length > 0) {
          return res.status(400).json({
            ok: false,
            msg: 'You already have a pending friend request to this user.',
          });
        } else {
          con.query(
            querySendFriendRequest,
            [user.id, receiverID],
            (err: any, results: any) => {
              if (results) {
                return res
                  .status(400)
                  .json({ ok: true, msg: 'Friend request sended.' });
              } else {
                // Add friend
                return res
                  .status(200)
                  .json({ ok: false, msg: 'Friend request error.', err });
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

export const responseFriendRequest = (req: any, res: Response) => {
  const { user } = req;
  const { id } = req.params;
  const { response } = req.body;
  try {
    // Validation of friend request
    con.query(queryFetchFriendRequestSingle, [id], (err: any, results: any) => {
      // Friend request exists
      if (results.length > 0) {
        const answ = results[0];
        // Friend request status is pending
        if (answ.accepted === 2) {
          // User is the receiver
          if (parseInt(answ.receiver) === parseInt(user.id)) {
            con.query(
              queryResponseFriendRequest,
              [response, id],
              (_: any, results: any) => {
                if (results) {
                  const msg: string =
                    response === 1
                      ? 'Friend Request Accepted'
                      : 'Friend Request Rejected';
                  // Add friend
                  console.log(answ);
                  return res
                    .status(200)
                    .json({ ok: true, msg, response, friend: answ.id });
                } else {
                  return res
                    .status(400)
                    .json({ ok: false, msg: 'Error on request' });
                }
              }
            );
          } else {
            return res.status(400).json({
              ok: false,
              msg: 'You are not the receiver of this friend request.',
            });
          }
        } else {
          return res
            .status(400)
            .json({ ok: false, msg: 'Friend request already answered.' });
        }
      } else {
        return res
          .status(200)
          .json({ ok: false, msg: 'Friend request not found.', err });
      }
    });
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};

export const fetchFriendRequestReceived = (req: any, res: Response) => {
  const { id } = req.user;
  try {
    con.query(queryFetchFriendRequestReceived, [id], (_: any, results: any) => {
      return res.status(200).json({
        ok: true,
        friendRequestList: results.length > 0 ? results : [],
      });
    });
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};

export const fetchAllFriend = (req: any, res: Response) => {
  const { id } = req.user;
  try {
    con.query(queryGetFriendList, [id], (_: any, results: any) => {
      return res
        .status(200)
        .json({ ok: true, friendList: results.length > 0 ? results : [] });
    });
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};

export const addFriend = (req: any, res: Response) => {
  const { id } = req.user;
  const { user2 } = req.body;
  try {
    con.query(
      queryAddFriend,
      [id, user2, user2, id],
      (_: any, results: any) => {
        if (results) {
          return res
            .status(200)
            .json({ ok: true, msg: 'Friend added', friend: user2 });
        } else {
          return res.status(400).json({ ok: false, msg: 'Error on request' });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};

export const removeFriend = (req: any, res: Response) => {
  const { id } = req.user;
  const { user2 } = req.body;
  try {
    console.log(queryRemoveFriend, [id, user2, user2, id]);
    con.query(
      queryRemoveFriend,
      [id, user2, user2, id],
      (_: any, results: any) => {
        if (results) {
          return res.status(200).json({ ok: true, msg: 'Friend removed' });
        } else {
          return res.status(400).json({ ok: false, msg: 'Error on request' });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};