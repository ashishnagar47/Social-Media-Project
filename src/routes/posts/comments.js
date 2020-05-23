const {Router}=require('express')

const commentsRoute=Router()

const{
    showComments,
    createNewComment
    }=require('../../controllers/comments')

commentsRoute.get('/:id',async(req,res)=>{
    const comment=await showComments()
    .catch((err)=>{
        console.log(err)
    })
})



module.exports={
    commentsRoute}