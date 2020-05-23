function loadPost(){
    $.get('/api/posts',(posts)=>{
      for(let p of posts){
        $('#posts-container').append(
          $(`
            <div class="card col-12 m-4" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${p.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                        <p class="card-text">
                        ${p.body}<a href="#" id="read"> </a>
                        </p>
                        <script>
                        document.getElementById('read).onclick=function(){readMe()}
                        function readMe(){
                            document.getElementById('read').innerHTML=${(p.body)}
                        }
                        </script>
                        <a href="#" class="card-link">Comments</a>
                        <a href="#" class="card-link">Like</a>
                    </div>
                </div>
          )
        `)
        
        )}
    })
    
  }