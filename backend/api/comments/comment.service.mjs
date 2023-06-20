import {dbService} from '../../services/db.service.mjs'
import {logger} from '../../services/logger.service.mjs'
import {asyncLocalStorage} from '../../services/als.service.mjs'
import mongodb from 'mongodb'

const {ObjectId} = mongodb

async function query() {
    try {
      const collection = await dbService.getCollection('msgs');
      const commentCursor = await collection.find();
  
      const comments = await commentCursor.toArray();
      return comments;
    } catch (err) {
      logger.error('cannot find comments', err);
      throw err;
    }
  }

async function remove(commentId) {
    try {
        const store = asyncLocalStorage.getStore()
        const { loggedinUser } = store
        const collection = await dbService.getCollection('comment')
        // remove only if user is owner/admin
        const criteria = { _id: ObjectId(commentId) }
        if (!loggedinUser.isAdmin) criteria.byUserId = ObjectId(loggedinUser._id)
        const {deletedCount} = await collection.deleteOne(criteria)
        return deletedCount
    } catch (err) {
        logger.error(`cannot remove comment ${commentId}`, err)
        throw err
    }
}


async function add(comment) {
    try {
        const commentToAdd = {
            // byUserId: ObjectId(comment.byUserId),
            // aboutUserId: ObjectId(comment.aboutUserId),
            msg: comment.txt
        }
        const collection = await dbService.getCollection('comment')
        await collection.insertOne(commentToAdd)
        return commentToAdd
    } catch (err) {
        logger.error('cannot insert comment', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.byUserId) criteria.byUserId = filterBy.byUserId
    return criteria
}

export const commentService = {
    query,
    remove,
    add
}


