const postUi = () =>
{
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(data=>{
      displayPost(data);
    })
}

const displayPost = (posts) =>
{
// for(let i = 0; i<posts.length; i++)
// {
//     console.log(posts[i]);
// }

// for(let i of posts)
// {
//     console.log(i);
// }
//  1. get the container 
const postContainer = document.getElementById("post-container");
postContainer.innerHTML = "";
// console.log(postContainer);

// 2.

posts.forEach((post) => {
    // console.log(post.title);

    // create html element
const li = document.createElement('li');
li.innerText  = post.title;
console.log(li);

// 3. add li into container
postContainer.appendChild(li)
});


}