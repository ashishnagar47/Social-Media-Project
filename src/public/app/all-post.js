function loadPost(){
    const user=JSON.parse(window.localStorage.user).username;
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
                        <a href="#" class="card-link">Like</a>
                        
                        <a href='/components/comments.html?user=${user}&post=${p.id}' class="comments" onclick="myFunction()">Comments</a>
                        
                    </div>
                </div>
          )
        `)
        
        )}
    })
  }
    

  