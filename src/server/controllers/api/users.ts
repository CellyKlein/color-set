import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import User from './../../models/User';

const signup = (req : Request, res : Response) =>
{
    const { username, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty())
    {
        return res.status(400).json({
            success: false,
            errors: errors.array().map(err => err.msg)
        });
    }

    const newUser = new User();

    newUser.username = username;
    newUser.password = newUser.hashPassword(password);

    newUser.save()
        .then((user) =>
        {
            res.status(200).json({
                success: true,
                user,
                message: `New user '${ user.username }' created!`
            });
        });
};

export default { signup };
