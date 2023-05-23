import express from 'express';
import { addMessage, getMessages } from '../Controllers/MessageController.js';

const router = express.Router();
//  to add new message in database
router.post('/', addMessage);
//  to get messages of specific chat
router.get('/:chatId', getMessages);

export default router