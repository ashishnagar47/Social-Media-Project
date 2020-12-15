
function writePost(){
$(()=>{
    $("#submit").click(()=>{
    const userId=JSON.parse(window.localStorage.user).id;
    const title=$("#postTitle").val()
    const body=$("#postBody").val()
    
    
        $.post('/api/posts',{userId,title,body})
        $("#contents").load('/components/all-posts.html')

    })
    
})
}

