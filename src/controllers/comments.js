const {Users,Posts,Comments}=require('../db/models')



async function createNewComment(postid,title,body){
    const comment=Comments.create({
        postid,
        title,
        body
    }).catch((err)=>{
        console.log(err)
    })
    return comment
}

async function showAllComments(){
    const comment=Comments.findAll({
        // include:[{model:Users},
        //     {
        //     model:Posts,
        //     where:{id:id}
        //     }]
        
    }).catch((err)=>{
        console.log(err)
    })
    return comment
}

async function showComments(id){
    const comment=Comments.findAll({
        include:[{model:Users},
            {
            model:Posts,
            where:{id:id}
            }]
        
    }).catch((err)=>{
        console.log(err)
    })
    return comment
}

module.exports={
    createNewComment,
    showComments,
    showAllComments
}


//Test Code 
// async function task() {

//       await createNewComment(
//         '2',
//         'this is a sample title',
//         'this is a sample Comment Body',
        
//       )
       

// const comment=await showComments('2')
//   for(let c of comment){
//     console.log(`${c.id}\nauthor:${c.title}\n${c.body}\n================\n`)
//   }
// }
//  task()

// .catch((err)=>{
//   console.log(err)
// })

