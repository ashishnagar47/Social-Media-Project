const {Router}=require('express')

const commentsRoute=Router()

const{
    showComments,
    createNewComment
    }=require('../../controllers/comments')

    commentsRoute.get('/',async(req,res)=>{
        const comment=await showComments()
        .catch((err)=>{console.log(err)})
        res.status(200).send(comment)
    })
    

commentsRoute.get('/:id',async(req,res)=>{
    const comment=await showComments(req.params.id)
    .catch((err)=>{
        console.log(err)
    })
    res.status(200).send(comment)
})

commentsRoute.post('/',async(req,res)=>{
    const{id,title,body}=req.body

    if((!id)||(!title)||(!body)){
        res.status(400).send({
            error: 'Need commentId, title or body to create comment '
        })
    }
    const comment=await createNewComment(id,title,body)
    .catch((err)=>{console.log(err)})
    res.status(200).send(comment)
})



module.exports={
    commentsRoute}