const  express=require('express')

const PORT=process.env.PORT||4567

const {db}=require('./src/db/models')

 
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const {usersRoute}=require('./src/routes/users')
const {postsRoute}=require('./src/routes/posts')
const {commentsRoute} =require('./src/routes/posts/comments')

app.use('/api/users',usersRoute)
app.use('/api/posts',postsRoute)
app.use('/api/comments',commentsRoute)
app.use('/',express.static(__dirname+'/src/public'))



db.sync()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`server started on http://localhost:${PORT}`);
        })
    })
    .catch((err)=>{
        console.error(new Error('Could not start database'))
        console.error(err);
    })


        
    
