import { Router } from "express";
import MessageController from "../controllers/MessageController";
import { authMiddleware } from "../middleware";

const messageRoutes = Router();

// @ts-ignore
messageRoutes.post("/api/v1/send", authMiddleware, MessageController.send);
messageRoutes.get(
    "/api/v1/get/:receiverId",    
    // @ts-ignore
    authMiddleware,
    MessageController.getConversation
);

export default messageRoutes;