import { Router } from "express";
import { HelloController } from "../controllers/helloController";

const router = Router();
const helloController = new HelloController();

// 使用 POST 路由來接收 name
// router.post('/', helloController.getHello);
router.post(
  "/",
  // #swagger.ignore = true
  helloController.getHello
);

export default router;
