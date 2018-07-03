document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest();


    // Open
    xhr.open('GET', 'data.txt', true);

    // console.log('READY STATE', xhr.readyState);


    // Optional - used for spinner/loaders
    xhr.onprogress = function(){
        // ready state 3
        // can put in spinner
    }


    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText )
            document.getElementById('output').innerHTML = `<h1>
        ${this.responseText}

</h1>`

        }
    }

    xhr.onerror = function() {
        console.log('Request error');
    }

    xhr.send();

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready


    // HTTP Statuses
    // 200 : "ok"
    // 403 : "Forbidden"
    // 404 : "Not Found"
}