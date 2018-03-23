//for loop

for(let i = 0; i <= 10; i++)
{
    //console.log('number ' + i);
    if(i===7)
    {
        console.log(i+ ' is my favorite!');
        continue;


    }

    if (i===8)
    {
        console.log('stop');
        break;
    }

    // if(i!=+2)
    // {
    //     console.log(i)
    // }


        console.log(i);

}


//while loop

let i =0;

while(i<10)
{
    console.log('Number' + i);
    i++;
}


//do while loop

// let i =-3;

do {
    console.log('Number ' + i);
    i++;

}

while(i < 10);


// loop through array

const cars = ['Ford', 'Chevy', 'Honda', 'Kia'];

for(let i = 0; i<cars.length; i++){
    console.log('I have a ' + cars[i])
}

//foreach

cars.forEach(
    function(car, index, array)
    {
        console.log(`${index} : ${car}`);
        console.log(array);
    }
);




//MAP

const users = [
    {
        id:1, name: 'Jon'
    },
    {
        id:2, name: 'Sara'
    },
    {
        id:3, name: 'Caren'
    }
];

const ids = users.map(function(user)
    {
        return user.id;
    }
);

console.log(ids);



// for in loop

const user= {
    firstName: 'Jon',
    lastName: 'Snow',
    age: 23
};


for(let x in user){
    console.log(`${x} : ${user[x]}`)
}

