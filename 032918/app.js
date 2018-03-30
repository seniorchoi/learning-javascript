const posts = [
    {title: 'Post One', body: 'this is post one'},
    {title: 'Post twe', body: 'this is post twe'}
];

// function createPost(post) {
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
//
// }
//
// function getPosts() {
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000)
//
// }
//
// createPost({title: 'Post three', body: 'This is post three'});
//
// getPosts();


function createPost(post) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error:smthn');
            }
            resolve();
        }, 2000);

    });


}

function getPosts() {
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)

}

createPost({title: 'Post three', body: 'This is post three'}).then(getPosts)
.catch(function(err){
   console.log(err);
});