let obj = {
    name: 'Luis',
    age: 20,
    lastName: 'Garcia',
    keypress: function(){
        console.log('A key has been pressed')
    },
    mouseOver: function (){
        console.log('The mouse cursor is above')
    }
}
//console.log(obj.name); //prints 'Luis'
//console.log(obj['name']); //prints 'Luis'

let myKey = 'name';
console.log(obj[myKey]); //prints 'Luis'
// El codigo usa la string 'name' como key 
myKey = 'keypress';
console.log(obj[myKey]()); //prints 'A key has been pressed' and 'undefined' right after
myKey = 'mouseOver';
console.log(obj[myKey]());//prints 'The mouse cursor is above' and 'undefined' right after


