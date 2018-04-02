// Baswic structure

// (function() {
//     // Declare private(can be accessed only inside) vars and functions
//
//     return {
//         // Declare public var and functions
//     }
// })();


// Standard module pattern
// const UICtrl = (function(){
//     let text = 'Hello world';
//
//     const changeText = function(){
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }
//
//     return {
//         callChangeText: function(){
//             changeText();
//             console.log(text);
//         }
//     }
//
// })();
//
// UICtrl.callChangeText();

// Revealing module pattern

const ItemCtrl = (function(){
    let data = [];

    function add(item) {
        data.push(item);
        console.log('item added');

    }
    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get,
    }
})();

ItemCtrl.add({id: 1, name: 'Jon'});
ItemCtrl.add({id: 2, name: 'Mark'});

console.log(ItemCtrl.get(2));


