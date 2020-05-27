                    
                    
function loadComments(){
  let usr=req.query.user;
     let postId=req.query.post;

    $.get(`/api/comments/${postId}`,(comments)=>{
      for(let c of comments){

        $('#comments-container').append(
          $(`
            <div class="card col-12 m-4" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${c.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${usr}</h6>
                        <p class="card-text">
                        ${c.body}<a href="#" id="read"> </a>
                        </p>
                    
                        
                    </div>
                </div>
          )
        `)
        
        )}
    })
  }

  function writeComment(){
    $(()=>{
      $("#submit").click(()=>{
      const postId=req.query.post;
      const title=$("#commentTitle").val()
      const body=$("#commentBody").val()
      
      
          $.post('/api/comments',{postId,title,body})
          $().load('/components/comments.html')
  
      })
      
  })
  }
    

  