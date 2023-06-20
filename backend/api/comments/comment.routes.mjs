import express from 'express'
import { requireAuth } from '../../middlewares/requireAuth.middleware.mjs'
import { log } from '../../middlewares/logger.middleware.mjs'

import {addComment, getComments, deleteComment} from './comment.controller.mjs'
const router = express.Router()

router.get('/', log, getComments)
router.post('/',  log, addComment)
router.delete('/:id', deleteComment)

export const commentRoutes = router