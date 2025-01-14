const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros) // an array within an array instead or merging them
// now to access these values 
// console.log(marvel_heros[3][1]) // flash 

const newArr = marvel_heros.concat(dc_heros)
// always store in a new array because a concatination returns a new array 
// console.log(newArr) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
 

const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const another_array2 = another_arr.flat(Infinity)
// console.log(another_array2)

// console.log(Array.isArray("Aleesha")) // false 
// console.log(Array.from("Aleesha"))
// console.log(Array.from({name: "Aleesha"})) // [] // empty // bec it cant be converted directly 

let score1 = 100;

let score2 = 200;


let score3 = 300;

console.log(Array.of(score1,score2,score3))