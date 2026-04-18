const postCard = () =>
{
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        displyPost(data);
    });
};

displyPost = (posts)=>
{
    // get the container and empty

    const postContainerr = document.getElementById("post_container");
    postContainerr.innerHTML = "";

    posts.forEach((post)=> {
        
        // 2. create html elemnt
        const post_Card = document.createElement("div");
        post_Card.innerHTML = `<div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>`;
      postContainerr.append(post_Card);
    });

}

postCard();
