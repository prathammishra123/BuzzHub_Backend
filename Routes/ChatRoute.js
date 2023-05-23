import express from 'express'
import { createChat, findChat, userChats } from '../Controllers/ChatController.js';
const router = express.Router()
// to create a chat
router.post('/', createChat);
// to get all chats of a specific user.
router.get('/:userId', userChats);
//  finding a specific chat with a specific user.
router.get('/find/:firstId/:secondId', findChat);

export default router