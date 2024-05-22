import { Router } from 'express';
import { HelloController } from '../controllers/helloController';

const router = Router();
const helloController = new HelloController();

router.get('/', helloController.getHello);

export default router;

