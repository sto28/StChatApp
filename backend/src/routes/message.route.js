import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersSidebar, getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();
//endpoints
//all protected with protectRoute function to ensure all users authenticated
router.get("/users", protectRoute, getUsersSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
export default router