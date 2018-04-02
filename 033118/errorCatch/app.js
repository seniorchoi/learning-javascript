const user = {email: 'jdoe@gmail.com'};


try {
    // Produce a ReferenceError
    // myFunction();

    // Produce a TypeError
    // null.myFunction();

    // Will produce syntaxError
    // eval('Hello World');

    // Will produce a URIError
    // decodeURIComponent('%');

    if(!user.name){
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }

} catch(e){
    console.log(`User Error: ${e.message}`)
    // console.log("it's null stupid!")
    // console.log(e);
    // console.log(e.name);
    // console.log(e.message);
    // console.log(e instanceof ReferenceError);
} finally {
    console.log('finally runs regardless')
}

console.log('Program continues...')