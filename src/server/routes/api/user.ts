import { Router } from 'express';

import controllers from '../../controllers';
import userValidations from './../../validations/users';

const router = Router();

router.route('/').post(
    userValidations.password,
    userValidations.passwordConfirmation,
    userValidations.allreadyExits,
    userValidations.username,
    controllers.users.signup
);

export default router;
