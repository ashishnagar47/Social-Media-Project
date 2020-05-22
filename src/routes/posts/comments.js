const {Router}=require('express')

const commentsRoute=Router()

const{showComments,createNewComment}=require('../../controllers/comments')

commentsRoute.get('/:id')



module.exports={
    commentsRoute}