// function nameIterator(names) {
//     let nextIndex = 0;
//
//     return {
//         next: function() {
//             return nextIndex < names.length ?
//                 { value: names[nextIndex++], done: false} :
//                 { done: true }
//         }
//     }
// }
//
// // Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// // Init iterator and pass name array
// const names = nameIterator(namesArr);
//
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());
// console.log(names.next());

// // Generator example
// function* sayNames() {
//     yield 'Jack';
//     yield 'Jik';
//     yield 'Jok';
//
//
// }
//
// const name = sayNames();
//
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next());
// console.log(name.next());

// ID creator
function* createIds(){
    let index =0;

    while(true) {
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
