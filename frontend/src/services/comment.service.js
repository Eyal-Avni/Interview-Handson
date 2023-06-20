import { httpService } from './http.service'
import { storageService } from './async-storage.service'

export const commentService = {
    add,
    query,
    // remove,
}

function query(filterBy) {
    var queryStr = !filterBy ? '' : `?name=${filterBy.name}&sort=anaAref`
    // return httpService.get(`Comment${queryStr}`)
    return storageService.query('comment')
}

// async function remove(CommentId) {
//     // await httpService.delete(`Comment/${CommentId}`)
//     await storageService.remove('Comment', CommentId)
// }

async function add(comment) {
    console.log(comment)
    try {
        await storageService.post('comment', comment)
        return comment
    } catch (error) {
        console.log(error)
    }
}
