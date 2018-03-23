const name = 'Jon';
const age = 31;
const job = 'kingOfDaNorf';
const city = 'winterfell';

let html;


//without template strings(es5)

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li></ul>' ;

html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>';

function hello() {
   return 'helloDoggos';
}


//with template strings(es6)

html = `
<ol>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'over 30' : 'under 30'}</li>

    
</ol>

        `;


document.body.innerHTML = html;


console.log(html);



