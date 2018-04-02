const http = new EasyHTTP();

// // Get Users


// http.get('https://api.github.com/users')
//     .then(data => console.log(data))
//     .catch(err =>console.log(err));


// User data
const data = {
    name: "Jon Snow",
    username: "king",
    email: 'kingof@Nof'
}

// // Create post
//
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err =>console.log(err));


// Update post
//
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err =>console.log(err));

// Delete User

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err =>console.log(err));
