import { Router } from 'express';

// import controllers from './../../controllers';

const router = Router();

router.route('/')
    .get()
    .post();

router.route('/:id')
    .get();

export default router;
