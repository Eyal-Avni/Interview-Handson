import { httpService } from './http.service'
import { storageService } from './async-storage.service'

export const commentService = {
    add,
    query,
    // remove,
}

function query(filterBy) {
    // var queryStr = !filterBy ? '' : `?name=${filterBy.name}&sort=anaAref`
    return httpService.get(`comment`)
    // return storageService.query('comment')
}

async function remove(CommentId) {
    await httpService.delete(`Comment/${CommentId}`)
    // await storageService.remove('Comment', CommentId)
}

async function add(comment) {
    try {
        // await storageService.post('comment', comment)
        console.log('comment from service: ', comment )
        await httpService.post(`comment`, comment)
        return comment
    } catch (error) {
        console.log(error)
    }
}
