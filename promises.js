const posts =[
    {title : 'post one' , body: 'this is post one'},
    {title : 'post two', body: 'this is post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post, index)=>{
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML=output;
    }, 1000)
}

// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
//             const error= false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject('Error: something went wrong')
//             }
//         }, 2000)
//     })
// }
//

function createPost(post){
    return new Promise((resolve,reject)=>{
        posts.push(post);
        resolve();
    })
}
createPost({title: 'post three', body: 'this is post three'}).then(getPosts).catch(err=> console.log(err));

function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           if(posts.length>0){
               resolve();
           }
           else{
               reject('no item to delete');
           }
        },1000)
    })
}


// timerId=setInterval(()=>{
//     deletePost().then(()=>{
//         posts.pop();
//         let lastPost = document.querySelector('body').lastChild;
//         lastPost.parentNode.removeChild(lastPost);
//     })
//     .catch((err)=>{
//         console.log(err)
//         clearInterval(timerId);
//     });
// }, 2000)


//promise.all
const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'goodbye')
})
Promise.all([promise1,promise2,promise3]).then(value =>{
    console.log(value)
})

//solution 3
function createPost2(post){
    return new Promise((resolve,reject)=>{
        posts.push(post);
        resolve(post);
    })
}
createPost2({title: 'four',body: 'four'}).
then(updateLastUserActivityTime=()=>{
    setTimeout(()=>{
        Promise.all(posts).then(value =>{
            console.log(value)
        })
    }, 1000)
}).then(deletePost().then(()=>{
    posts.pop();
    let lastPost = document.querySelector('body').lastChild;
    lastPost.parentNode.removeChild(lastPost);
}))
Promise.all(posts).then(value =>{
    console.log(value)
})