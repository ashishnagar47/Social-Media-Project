const {Users,Posts,Comments}=require('../db/models')

async function createNewComment(id,title,body){
    const comment=Comments.create({
        id,
        title,
        body
    }).catch((err)=>{
        console.log(err)
    })
    return comment
}

async function showComments(){
    const comment=Comments.findAll({
        include:Users,Posts
    }).catch((err)=>{
        console.log(err)
    })
    return comment
}

module.exports={
    createNewComment,
    showComments
}


//Test Code 
// async function task() {

//     console.log(
//       await createNewComment(
//         '3',
//         'this is a sample title',
//         'this is a sample Comment Body',
        
//       )
//     )    

// const comment=await showComments()
//   for(let c of comment){
//     console.log(`${c.post.title}\nauthor:${c.user.username}\n${c.body}\n================\n`)
//   }
// }
//  task()

// .catch((err)=>{
//   console.log(err)
// })

