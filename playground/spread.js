// function add(a, b) {
//   return a + b;
// }
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Matt', 'Abby'];
// var groupB = ['Ashley'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 18];
var person2 = ['Jen', 25];

function greeting(name, age) {
  console.log("Hi " + name + " you are " + age);
}

greeting(...person);
greeting(...person2);

var names = ['Matt', 'Abby', 'Mike'];
var final = ['Beaney', ...names];

final.forEach(function(element) {
  console.log(element);
})
