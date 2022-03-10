import { Router } from 'express';

import controllers from '../../controllers';
import validations from './../../validations';

const router = Router();

router.route('/').post(
    validations.user.password,
    validations.user.passwordConfirmation,
    validations.user.allreadyExits,
    validations.user.username,
    controllers.user.signup
);

export default router;
