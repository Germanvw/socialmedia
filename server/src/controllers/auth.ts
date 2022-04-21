import { Response } from 'express';
import { createJWT } from '../helpers/createJWT';
import { hashPassword, isMatch } from '../helpers/password';
import { UserDataProps } from '../interfaces/interfaces';
import {
  queryAuthLogin,
  queryUserEmailExists,
  queryAuthRegister,
} from './querys';
const con = require('../db/db');

export const authLogin = (req: any, res: Response) => {
  const { email, password } = req.body;
  try {
    con.query(
      queryAuthLogin,
      [email],
      async (err: any, results: UserDataProps[]) => {
        if (results.length > 0) {
          const userFound = results[0];
          const match = await isMatch(password, userFound.password!);
          if (match) {
            userFound.password = undefined;

            // Create JWT
            const token = await createJWT(userFound);

            return res
              .status(200)
              .json({ ok: true, user: { ...userFound }, token });
          } else {
            return res
              .status(400)
              .json({ ok: false, msg: 'Invalid password.' });
          }
        } else {
          return res
            .status(400)
            .json({ ok: false, msg: 'No user found.', err });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};

export const authRegister = (req: any, res: Response) => {
  const {
    username,
    email,
    password,
    firstname,
    lastname,
    age,
    country,
    province,
    gender,
  } = req.body;
  try {
    // Email unique
    con.query(queryUserEmailExists, [email], async (err: any, results: any) => {
      if (results.length > 0) {
        return res
          .status(400)
          .json({ ok: false, msg: 'Email already exists.' });
      } else {
        const hashedPassword = await hashPassword(password);
        con.query(
          queryAuthRegister,
          [
            username,
            email,
            hashedPassword,
            firstname,
            lastname,
            age,
            country,
            province,
            gender,
          ],
          (err: any, results: any) => {
            if (results) {
              return res
                .status(201)
                .json({ ok: true, msg: 'User registered!' });
            } else {
              return res
                .status(400)
                .json({ ok: false, msg: 'Unable to register.', err });
            }
          }
        );
      }
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error on request' });
  }
};
