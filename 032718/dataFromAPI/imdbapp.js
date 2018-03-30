document.querySelector('.search').addEventListener('click', getRating);



class lines {
    // public output = '';
    static makeLine(k,response){

        document.querySelector('.results').innerHTML += '<li>' + k + ' : ' + response[k] + '</li>';
    }
    static errorLine(){

        document.querySelector('.results').innerHTML = 'Invalid title';
    }

}


function getRating(e){

    document.querySelector('.results').innerHTML = '';
    document.querySelector('.resultsImg').innerHTML = '';
    const title = document.querySelector('input').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://www.omdbapi.com/?t=${title}&apikey=b0b546e5`, true);

    xhr.onload = function(){
        if(this.status === 200){
            var output = '<ul>';
            const response = JSON.parse(this.responseText);
            console.log(response);

            if (response.Response === 'False'){
                lines.errorLine();

            } else{

                for (let k in response){

                    if(k === 'imdbRating'){
                        lines.makeLine(k,response);


                    } else if (k === 'Title'){

                        lines.makeLine(k,response);

                    } else if (k === 'Year'){

                        lines.makeLine(k,response);

                    }else if (k === 'Actors'){

                        lines.makeLine(k,response);

                    }else if (k === 'Poster'){
                        document.querySelector('.resultsImg').innerHTML += '<img src = "'+ response[k] +'">';

                    }else if (k === 'BoxOffice'){

                        lines.makeLine(k,response);

                    }else if (k === 'Director'){

                        lines.makeLine(k,response);

                    }else if (k === 'Plot'){

                        lines.makeLine(k,response);

                    }



                }

            }



        }

    };

    xhr.send();




            e.preventDefault();

}

