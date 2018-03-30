document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local Text file

function getText() {
    fetch('test.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(function(err){
            console.log(err);

        });
}

// Get local JSON data

function getJson() {
    fetch('post.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            let output = '';
            data.forEach(function(dat){
                output += `${dat.title} : ${dat.body} <br>`;
            });
            document.getElementById('output').innerHTML = output;


        })
        .catch(function(err){
            console.log(err);

        });
}


// Get from external API

function getExternal() {
    fetch('https://api.github.com/users')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            let output = '';
            data.forEach(function(user){
                output += `${user.login}<br>`;
                // output += '<img src = "'+ user.avatar_url +'">'
            });
            console.log(output);
            document.getElementById('output').innerHTML = output;


        })
        .catch(function(err){
            console.log(err);

        });
}